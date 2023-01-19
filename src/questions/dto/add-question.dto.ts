import { IsNotEmpty } from "class-validator";

export class AddQuestionDto{

    @IsNotEmpty()
    question: string;

    @IsNotEmpty()
    timestamp: Date;

    @IsNotEmpty()
    askedById: string;

    @IsNotEmpty()
    votes: number;

    @IsNotEmpty()
    isOpen: boolean;
    
    @IsNotEmpty()
    categoryId: string;

    @IsNotEmpty()
    topic: string;

    @IsNotEmpty()
    lastUpdated: Date;
    
}