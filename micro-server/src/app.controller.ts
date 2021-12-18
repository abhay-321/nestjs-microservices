import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('log_message')
  async handleMessagePrinted(data: Record<string, unknown>) {
    this.appService.logMessage(data.text)
  }
}
