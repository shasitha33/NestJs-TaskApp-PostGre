import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { Question } from './questions.entity';
import { AddQuestionDto } from './dto/add-question.dto';
import { GetAllQuestionsDto } from './dto/get-all-questions.dto';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(QuestionRepository)
        private questionRepository : QuestionRepository,
    ){}


    async getQuestion(id: number): Promise<Question> {
        const found = await this.questionRepository.findOne(id);

        if (!found){
            throw new NotFoundException (`Question with ID "${id}" not found`); 
        }
        return found;
    }


    async addQuestion(addQuestionDto: AddQuestionDto): Promise<Question> { 
        return this.questionRepository.addQuestion(addQuestionDto);
    }


    async deleteQuestion(id : number): Promise<void> {
        const result = await this.questionRepository.delete(id);

        if (result.affected === 0){
            throw new NotFoundException(`Question with ID "${id}" not found`);
        }
    }

    
    async getAllQuestions(filterDto :  GetAllQuestionsDto) : Promise < Question[]> {
        return this.questionRepository.getAllQuestions(filterDto);
    }


}

