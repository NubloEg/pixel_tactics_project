import { response } from 'express';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AchievementService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: any) {
    await this.prismaService.achievement.create({
      data: {
        ...dto,
      },
    });

    return response.status(200);
  }

  async getAll() {
    return await this.prismaService.achievement.findMany();
  }
}
