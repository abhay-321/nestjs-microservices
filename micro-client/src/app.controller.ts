import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id) {
    return this.appService.getUserById(id);
  }
}
