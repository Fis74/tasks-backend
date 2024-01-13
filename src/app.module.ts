import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TasksEntity } from './tasks/entities/tasks.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [TasksEntity],
      ssl: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
