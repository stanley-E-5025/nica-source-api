import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { videos } from 'src/ enity/videos.enity';
import { VideoService } from './video.service';

@Controller()
export class VideoController {
  constructor(private VideoService: VideoService) {}

  @Get()
  getAllVideos(): Promise<videos[]> {
    return this.VideoService.getAllVideos();
  }

  @Post()
  create(@Body() Video: videos) {
    return this.VideoService.addVideos(Video);
  }

  @Patch(':id')
  updateOneVideo(
    @Param('id') id: string,
    @Body() Video: videos,
  ): Promise<videos> {
    return this.VideoService.updateVideos(Number(id), Video);
  }

  @Get(':id')
  getOneVideo(@Param('id') id: string): Promise<videos> {
    return this.VideoService.findOne(Number(id));
  }

  @Delete(':id')
  deleteOneVideo(@Param('id') id: string) {
    return this.VideoService.deleteVideos(Number(id));
  }
}
