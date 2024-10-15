import { TypeOrmModuleOptions } from '@nestjs/typeorm';

 export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    port: 5432,
    database: 'postgres',
    host: 'localhost',
    password: '2005-Postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  };
