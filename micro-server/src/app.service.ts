import { Injectable } from '@nestjs/common';
import { User } from './model/User';
import db = require('./db/user');

@Injectable()
export class AppService {
  
  findUserByUserId(id : number): User {
    return db.findUserByID(id);
  }
}
