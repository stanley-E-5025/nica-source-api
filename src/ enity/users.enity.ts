import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { videos } from './videos.enity';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  picture: string;

  @Column()
  role: string;

  @Column()
  uid: string;

  @Column('text', { array: true })
  subs: string[];

  @Column('text', { array: true })
  liked_videos: string[];

  @Column('text', { array: true })
  my_videos: string[];
}


