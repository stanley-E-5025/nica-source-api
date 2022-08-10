import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object{
    return {
      username:'Stanly',
      email:'stanleygordon45@gmail.com',
      photoUrl:"https//someimage938"
    };
  }
}
