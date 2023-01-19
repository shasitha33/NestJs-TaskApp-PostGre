import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { Answer } from './answers.entity';
import { AddAnswerDto } from './dto/add-answer.dto';
import { GetAnswersToQuestionDto } from './dto/get-answers-to-question.dto';

@Controller('answers')
export class AnswersController {
    constructor( private answersService : AnswersService ){}

    @Get('/:id')
    getAnswer(@Param('id', ParseIntPipe) id: number):Promise<Answer>{
        return this.answersService.getAnswer(id);
    }

    @Get()
    getAnswersToQuestion(@Query() filterDto: GetAnswersToQuestionDto) : Promise <Answer[]> {
        return this.answersService.getAnswersToQuestion(filterDto);
    }
    
    @Post()
    addAnswer(@Body() addAnswerDto : AddAnswerDto): Promise <Answer> {
        return this.answersService.addAnswer(addAnswerDto);
    }

    @Delete('/:id')
    deleteAnswer(@Param('id', ParseIntPipe) id: number) : Promise<void> {
        return this.answersService.deleteAnswer(id);
    }
}
