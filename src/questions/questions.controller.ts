import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './questions.entity';
import { AddQuestionDto } from './dto/add-question.dto';
import { GetAllQuestionsDto } from './dto/get-all-questions.dto';

@Controller('questions')
export class QuestionsController {
    constructor(private questionService : QuestionsService){}

    @Get ('/:id')
    getQuestion(@Param ('id', ParseIntPipe ) id: number):Promise<Question>{
        return this.questionService.getQuestion(id);
    }

    @Post()
    addQuestion(@Body() addQuestionDto: AddQuestionDto): Promise<Question> {
        return this.questionService.addQuestion(addQuestionDto);  
    }

    @Delete('/:id')
    deleteQuestion(@Param('id', ParseIntPipe) id: number) : Promise<void> {
        return this.questionService.deleteQuestion(id);
    }

    @Get()
    getALLQuestions(@Query() filterDto: GetAllQuestionsDto) : Promise <Question[]> {
        return this.questionService.getAllQuestions(filterDto);
    }
}
