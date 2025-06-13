import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cinema API')
    .setDescription('Documentação da API do sistema de cinema')
    .setVersion('1.0')
    .addTag('cinema')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger acessível em /api

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
