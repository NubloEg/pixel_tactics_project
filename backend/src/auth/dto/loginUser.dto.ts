import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class LoginUserDto {
  @IsString({ message: "Почта должно быть строкой" })
  @IsNotEmpty({ message: "Почта не может быть пустой" })
  @IsEmail({}, { message: "Некоректный формат" })
  email: string;

  @IsString({ message: "Пароль должно быть строкой" })
  @IsNotEmpty({ message: "Пароль не может быть пустым" })
  @MinLength(6, { message: "Пароль должен быть минимум 6 символов" })
  password: string;
}
