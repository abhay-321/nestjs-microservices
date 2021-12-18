import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('ServerMain');

/** 
 * Create microservice config options
 * Server Listening at 3000
 * */ 

const microserviceOptions : MicroserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
    retryAttempts : 5,
    retryDelay : 5000
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microserviceOptions
  );
  await app.listen();
  logger.log("MS Server up and listening")
}

bootstrap();
