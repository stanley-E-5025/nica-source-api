import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { users } from 'src/ enity/users.enity';
import { UsersService } from './users.service';

@Controller()
export class UserController {
  constructor(private UserService: UsersService) {}

  @Get()
  getAllUsers(): Promise<users[]> {
    return this.UserService.getAllUsers();
  }

  @Post()
  create(@Body() User: users) {
    return this.UserService.addUsers(User);
  }

  @Get(':id')
  getOneUser(@Param('id') id: string): Promise<users> {
    return this.UserService.findOne(Number(id));
  }

  @Patch(':id')
  updateOneUser(@Param('id') id: string, @Body() User: users): Promise<users> {
    return this.UserService.updateUser(Number(id), User);
  }

  @Delete(':id')
  deleteOneUser(@Param('id') id: string) {
    return this.UserService.deleteUser(Number(id));
  }
}
