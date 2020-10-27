import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourserController } from './courser/courser.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { Course } from './course.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
          // @ts-ignore
          type: process.env.TYPEORM_CONNECTION,
          database: process.env.TYPEORM_DATABASE,
          entities: [Course],
    }),
    TypeOrmModule.forFeature([Course])
  ],
  controllers: [AppController, CourserController],
  providers: [AppService],
})

export class AppModule {}
