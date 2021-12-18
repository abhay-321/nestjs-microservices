import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
     { name: 'LOGGER_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
