import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

const logger  = new Logger("ClientAppController");
@Controller()
export class AppController {
  constructor(@Inject('LOGGER_SERVICE') private readonly client:   ClientProxy) { }
  
  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  emitMessage() {
    logger.log("In Microservice Client");
    this.client.emit<any>('log_message', {text : 'Service Communicating'});
  }

}
