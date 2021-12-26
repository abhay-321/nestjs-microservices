import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user-topic') // topic name here
  getHello(@Payload() message) {
    let id = message.value.userid;
    // Plus operator here does string to number conversion on the fly
    return this.appService.findUserByUserId(+id);
  }
}
