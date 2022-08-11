import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.modules';
import { VideoProvider } from 'src/providers/videos.provider';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VideoController],
  providers: [...VideoProvider, VideoService],
})
export class VideosModule {}
