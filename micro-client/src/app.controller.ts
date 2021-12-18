import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(@Query() query){
    
    if(!query.username)
    return `Please add Query param as "?username=abhay"`;

    return this.appService.getUser(query.username);
  }
}
