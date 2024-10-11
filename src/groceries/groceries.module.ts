import { Module } from '@nestjs/common';
import { GroceriesService } from './groceries.service';
import { GroceriesController } from './groceries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grocery } from './entities/grocery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grocery])],
  controllers: [GroceriesController],
  providers: [GroceriesService],
})
export class GroceriesModule {}
