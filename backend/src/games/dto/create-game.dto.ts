import { IsInt, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @MinLength(3)
  title: string;
  @IsString()
  @IsOptional()
  password: string;
  @IsInt()
  createPlayerId: number;
}
