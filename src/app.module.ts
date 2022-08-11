import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    usersModule,
    RouterModule.register([{ path: 'api/users', module: usersModule }]),

    VideosModule,
    RouterModule.register([{ path: 'api/videos', module: VideosModule }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
