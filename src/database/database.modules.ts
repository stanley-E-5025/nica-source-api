import { Module } from '@nestjs/common';
import { DatabaseProvider } from 'src/providers/databaseprovider';

@Module({
  providers: [...DatabaseProvider],
  exports: [...DatabaseProvider],
})
export class DatabaseModule {}
