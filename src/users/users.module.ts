import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.modules';
import { UserProvider } from 'src/providers/users.provider';
import { UserController } from './user.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule, ],
  controllers: [UserController],
  providers: [...UserProvider, UsersService],
})
export class usersModule {}
