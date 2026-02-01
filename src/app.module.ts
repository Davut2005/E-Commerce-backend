import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { config } from './orm.config';
import { GroceriesModule } from './groceries/groceries.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    GroceriesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
