import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerRepository } from './answer.repository';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([AnswerRepository]),
  ],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
