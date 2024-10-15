import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceriesModule } from './groceries/groceries.module';
import { config } from './orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    GroceriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
