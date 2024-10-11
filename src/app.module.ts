import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceriesModule } from './groceries/groceries.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      port: 5432,
      database: 'postgres',
      host: 'localhost',
      password: '2005-Postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GroceriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
