import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';
config();
async function bootstrap() {
  

  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle("Teste L2 Code")
    .setDescription("Teste L2")
    .setVersion("1.0")
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
        description: 'Insira seu token JWT aqui. Ex: Bearer <seu_token>'
      },
      'access-token', 
    )
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
