import { Inject, Injectable } from '@nestjs/common';
import { users } from 'src/ enity/users.enity';
import { InsertResult, Repository, DeleteResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private UsersRepositoty: Repository<users>,
  ) {}
  async getAllUsers(): Promise<users[]> {
    return this.UsersRepositoty.find();
  }

  async addUsers(User: users): Promise<InsertResult> {
    return this.UsersRepositoty.insert(User);
  }

  async findOne(id: number): Promise<users> {
    return this.UsersRepositoty.findOneBy({
      id,
    });
  }

  async updateUser(id: number, Users: users): Promise<users> {
    const UserToUpdate = await this.findOne(id);

    if (UserToUpdate === undefined) {
      return;
    }
    await this.UsersRepositoty.update(id, Users);
    return this.findOne(id);
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    const UserToUpdate = await this.findOne(id);

    if (UserToUpdate === undefined) {
      return;
    }
    return this.UsersRepositoty.delete(id);
  }
}
