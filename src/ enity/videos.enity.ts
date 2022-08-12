import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { users } from './users.enity';

@Entity()
export class videos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  details: string;

  @Column()
  title: string;

  @Column()
  published: boolean;

  @Column()
  creation_date: string;

  @Column()
  uid: string;

  @Column('text', { array: true })
  likes: string[];
}
