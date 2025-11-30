import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Парсер для куков
  app.use(cookieParser());

  //Глобавльный пайп для валидации полей
  app.useGlobalPipes(new ValidationPipe());

  //Корсы
  app.enableCors({
    origin: process.env.ORIGIN ?? "http://localhost:3000",
    credentials: true,
  });

  //SWAGER Настройки
  const config = new DocumentBuilder()
    .setTitle("Pixel")
    .setDescription("Pixel API description")
    .setVersion("1.0")
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, documentFactory);

  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
