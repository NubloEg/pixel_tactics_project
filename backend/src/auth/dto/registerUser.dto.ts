import {
  IsString,
  IsNotEmpty,
  Length,
  IsEmail,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не может быть пустым' })
  @Length(3, 20, { message: 'Имя должно быть минимум 3 символа' })
  username: string;

  @IsString({ message: 'Почта должно быть строкой' })
  @IsNotEmpty({ message: 'Почта не может быть пустой' })
  @IsEmail()
  email: string;

  @IsString({ message: 'Пароль должно быть строкой' })
  @IsNotEmpty({ message: 'Пароль не может быть пустым' })
  @MinLength(6, { message: 'Пароль должен быть минимум 6 символов' })
  password: string;
}
