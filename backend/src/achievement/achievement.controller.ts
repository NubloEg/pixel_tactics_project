import { Body, Controller, Get, Post } from '@nestjs/common';
import { AchievementService } from './achievement.service';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  create(@Body() createAchivementDto: any) {
    return this.achievementService.create(createAchivementDto);
  }

  @Get()
  getAll() {
    return this.achievementService.getAll();
  }
}
