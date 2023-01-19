import {IsNotEmpty} from 'class-validator';

export class AddAnswerDto{
    
    @IsNotEmpty()     
    questionId : number;

    @IsNotEmpty()
    timestamp: Date;

    @IsNotEmpty()
    answer: string;

    @IsNotEmpty()
    answeredBy : string;

    @IsNotEmpty()
    votes : number;
    
}