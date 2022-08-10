import { Inject, Injectable } from '@nestjs/common';
import { users } from 'src/ enity/users.enity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private UsersRepositoty: Repository<users>,
  ) {}
  getAllUsers(): Promise <users[]>{
    return this.UsersRepositoty.find();
  }
}
