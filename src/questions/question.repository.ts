import { EntityRepository, Repository } from "typeorm";
import { Question } from './questions.entity';
import { AddQuestionDto } from './dto/add-question.dto';
import { GetAllQuestionsDto } from './dto/get-all-questions.dto';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question>{

   
    async getAllQuestions(filterDto : GetAllQuestionsDto) : Promise <Question[]> {
        const {categoryId} = filterDto;
        const query = this.createQueryBuilder('question');

        if (categoryId){
            query.andWhere('question.categoryId = :categoryId', {categoryId});
        }
        const questions = await query.getMany();
        return questions;
    }


    async addQuestion(addQuestinDto : AddQuestionDto) : Promise<Question>  {
        
        const { question, timestamp, askedById, votes, isOpen, categoryId, topic, lastUpdated} = addQuestinDto;
        const question1 = new Question();
        question1.question = question;
        question1.timestamp = timestamp;
        question1.askedById =askedById;
        question1.votes = votes;
        question1.isOpen = isOpen;
        question1.categoryId = categoryId;
        question1.topic = topic;
        question1.lastUpdated = lastUpdated;
        await question1.save()

        return question1;
    }

}