import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usersModule } from './users/users.module';

@Module({
  imports: [
    usersModule,
    RouterModule.register([{ path: 'api/users', module: usersModule }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
