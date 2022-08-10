import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
