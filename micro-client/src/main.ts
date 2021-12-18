import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Server listening at 3000, opening 3060 for client
  await app.listen(3060);
}
bootstrap();
