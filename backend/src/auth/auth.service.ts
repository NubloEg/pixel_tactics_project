import { LoginUserDto } from './dto/loginUser.dto';
import { ConfigService } from '@nestjs/config';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.interface';
import { Request, Response } from 'express';
import { isDev } from 'src/utils/is-dev.util';

@Injectable()
export class AuthService {
  private COOKIE_DOMAIN;
  private JWT_ACCESS_TOKEN_TTL;
  private JWT_REFRESH_TOKEN_TTL;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.COOKIE_DOMAIN = configService.getOrThrow('COOKIE_DOMAIN');
    this.JWT_ACCESS_TOKEN_TTL = configService.getOrThrow(
      'JWT_ACCESS_TOKEN_TTL',
    );
    this.JWT_REFRESH_TOKEN_TTL = configService.getOrThrow(
      'JWT_REFRESH_TOKEN_TTL',
    );
  }

  async validate(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
      omit: {
        password: true,
      },
    });

    if (!user) throw new NotFoundException('Not found user');

    return user;
  }

  async register(response: Response, registerUser: RegisterUserDto) {
    const { email } = registerUser;

    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (user) throw new ConflictException('Have user');

    const newUser = await this.prismaService.user.create({
      data: {
        ...registerUser,
        password: await hash(registerUser.password),
      },
    });

    return this.auth(response, newUser.id);
  }

  async login(response: Response, loginUser: LoginUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: loginUser.email,
      },
    });

    if (!user) throw new NotFoundException('Not found user');

    const isValidPassword = await verify(user.password, loginUser.password);

    if (!isValidPassword) throw new NotFoundException('Not found user');

    return this.auth(response, user.id);
  }

  async refresh(request: Request, response: Response) {
    const refreshToken = request.cookies['refreshToken'];

    if (refreshToken === 'undefined') {
      throw new UnauthorizedException('Not found user');
    }

    const payload: JwtPayload = await this.jwtService.verifyAsync(refreshToken);

    if (!payload) throw new UnauthorizedException('Not found user');

    const user = this.prismaService.user.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user) throw new UnauthorizedException('Not found user');

    return this.auth(response, payload.id);
  }

  async logout(response: Response) {
    this.setCookie(response, 'accessToken', '', new Date(0));
    this.setCookie(response, 'refreshToken', '', new Date(0));

    return true;
  }

  private auth(res: Response, id: number) {
    const { accessToken, refreshToken } = this.generateTokens(id);

    this.setCookie(
      res,
      'accessToken',
      accessToken,
      new Date(Date.now() + 60 * 60 * 24 * 7),
    );
    this.setCookie(
      res,
      'refreshToken',
      refreshToken,
      new Date(Date.now() + 60 * 60 * 24 * 7),
    );

    return true;
  }

  private setCookie(
    res: Response,
    cookieName: string,
    value: string,
    expires: Date,
  ) {
    res.cookie(cookieName, value, {
      httpOnly: true,
      domain: this.COOKIE_DOMAIN,
      expires,
      secure: !isDev(this.configService),
      sameSite: 'lax',
    });
  }

  private generateTokens(id: number): {
    accessToken: string;
    refreshToken: string;
  } {
    const payload: JwtPayload = {
      id,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
