import { UsersService } from './../users/users.service';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { response } from 'express';

@Injectable()
export class GamesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async create(createGameDto: CreateGameDto) {
    const { title, password, createPlayerId } = createGameDto;

    await this.prismaService.game.create({
      data: {
        title,
        password,
        players: {
          connect: {
            id: createPlayerId,
          },
        },
      },
    });
    return response.status(200);
  }

  async findAll() {
    return await this.prismaService.game.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        players: {
          select: {
            username: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const game = await this.prismaService.game.findUnique({
      where: {
        id,
      },
    });

    if (!game) throw new NotFoundException('Not found game');

    return game;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    console.log(updateGameDto);
    return `This action updates a #${id} game`;
  }

  async remove(id: number) {
    try {
      await this.prismaService.game.delete({
        where: { id },
      });
      return response.status(200);
    } catch (error) {
      throw new NotFoundException('Not found game', error);
    }
  }
}
