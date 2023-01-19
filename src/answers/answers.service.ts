import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerRepository } from './answer.repository';
import { Answer } from './answers.entity';
import { AddAnswerDto } from './dto/add-answer.dto';
import { GetAnswersToQuestionDto } from './dto/get-answers-to-question.dto';


@Injectable()
export class AnswersService {
    constructor(
        @InjectRepository(AnswerRepository)
        private answerRepository: AnswerRepository,
    ){}

    async getAnswer(id : number): Promise<Answer>{
        const found = await this.answerRepository.findOne(id);
        if (!found){
            throw new NotFoundException(`Answer with ID "${id}" not found`); /*Not Single Quetes*/
        }
        return found;
    }

    async addAnswer(addAnswerDto: AddAnswerDto): Promise<Answer> { 
        return this.answerRepository.addAnswer(addAnswerDto);
    }

    async deleteAnswer(id : number): Promise<void> {
        const result = await this.answerRepository.delete(id);

        if (result.affected === 0){
            throw new NotFoundException(`Answer with ID "${id}" not found`);
        }
    }

    async getAnswersToQuestion(filterDto : GetAnswersToQuestionDto) : Promise <Answer[]> {
        return this.answerRepository.getAnswersToQuestion(filterDto);
    }

    
    }