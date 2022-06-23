import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

@Module({
  imports: [MikroOrmModule.forRoot({
    entitiesTs: ['./src/entities'],
    dbName: 'nam-shop',
    type: 'postgresql',
    host: 'localhost',
    user: 'tung',
    password: 'password123',
    port: 5432,
  })],
})
export class ApiDatabaseModule {}
