import { Inject, Injectable } from '@nestjs/common';
import { videos } from 'src/ enity/videos.enity';
import { InsertResult, Repository, DeleteResult } from 'typeorm';

@Injectable()
export class VideoService {
  constructor(
    @Inject('VIDEOS_REPOSITORY') private VideoRepository: Repository<videos>,
  ) {}
  async getAllVideos(): Promise<videos[]> {
    return this.VideoRepository.find();
  }

  async addVideos(Videos: videos): Promise<InsertResult> {
    return this.VideoRepository.insert(Videos);
  }

  async findOne(id: number): Promise<videos> {
    return this.VideoRepository.findOneBy({
      id,
    });
  }

  async findOneByuid(uid: string): Promise<videos> {
    return this.VideoRepository.findOneBy({
      uid,
    });
  }

  async updateVideos(id: number, Videos: videos): Promise<videos> {
    const UserToUpdate = await this.findOne(id);

    if (UserToUpdate === undefined) {
      return;
    }
    await this.VideoRepository.update(id, Videos);
    return this.findOne(id);
  }

  async deleteVideos(id: number): Promise<DeleteResult> {
    const VideosToUpdate = await this.findOne(id);

    if (VideosToUpdate === undefined) {
      return;
    }
    return this.VideoRepository.delete(id);
  }
}
