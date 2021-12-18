import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Instead of specifying db connection over here,
   * simulating a static data with dynamic username value in query param
   */
  getUser(username: string): User {
    return { name : username , email : username + "@nestjs.com"};
  }
}
