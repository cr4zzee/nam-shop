import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiDatabaseModule } from '@nam-shop/api/database';
@Module({
  imports: [ApiDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
