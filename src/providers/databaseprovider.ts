import { users } from 'src/ enity/users.enity';
import { createConnection } from 'typeorm';

export const DatabaseProvider = [
  {
    provide: 'DATABASE_CONECTION',
    useFactory: async () =>
      createConnection({
        type: 'postgres',
        host: 'fanny.db.elephantsql.com',
        port: 5432,
        username: 'mlktskna',
        password: 'bYOnzcBrLz2mAlW09A3rHvolgG7R2Ht7',
        database: 'mlktskna',
        entities: [users],
        synchronize: true,
      }),
  },
];
