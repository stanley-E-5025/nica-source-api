import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class videos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  details: string;

  @Column()
  likes: number;

  @Column()
  title: string;
  @Column()
  published: boolean;

  @Column()
  creation_date: string;
}
