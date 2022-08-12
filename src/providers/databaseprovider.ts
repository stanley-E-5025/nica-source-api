import { users } from 'src/ enity/users.enity';
import { videos } from 'src/ enity/videos.enity';
import { createConnection } from 'typeorm';

export const DatabaseProvider = [
  {
    provide: 'DATABASE_CONECTION',
    useFactory: async () =>
      createConnection({
        type: 'postgres',
        host: 'ec2-34-201-95-176.compute-1.amazonaws.com',
        port: 5432,
        username: 'sqecpswsrlzigg',
        password: 'fccf800607ef7350884edcb16ee35a36382d69e0c0fdab5ab54d5826b779213e',
        database: 'sqecpswsrlzigg',
        entities: [users, videos],
        synchronize: true,
      }),
  },
];
