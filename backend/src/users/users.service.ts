import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, response } from 'express';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    await this.prismaService.user.create({
      data: {
        ...createUserDto,
      },
    });

    return response.status(200);
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(request: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = request.user as User;

    return user;
  }

  async update(id: number, updateUserDto: Partial<UpdateUserDto>) {
    await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });

    return response.status(200);
  }

  async remove(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundException('Not found user');

    await this.prismaService.user.delete({
      where: {
        id,
      },
    });

    return response.status(200);
  }
}
