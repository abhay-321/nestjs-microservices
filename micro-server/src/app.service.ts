import { Injectable, Logger } from '@nestjs/common';

const logger = new Logger('ServerAppService');

@Injectable()
export class AppService {
 
  logMessage(message): void {
    logger.log(message);
  }
  
}
