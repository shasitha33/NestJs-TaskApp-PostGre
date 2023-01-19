import { EntityRepository, Repository } from "typeorm";
import { Answer } from './answers.entity';
import { AddAnswerDto } from './dto/add-answer.dto';
import { GetAnswersToQuestionDto } from './dto/get-answers-to-question.dto';

@EntityRepository(Answer)
export class AnswerRepository extends Repository<Answer>{

    async getAnswersToQuestion(filterDto : GetAnswersToQuestionDto) : Promise <Answer[]> {
        const {questionId} = filterDto;
        const query = this.createQueryBuilder('answer');

        if (questionId){
            query.andWhere('answer.questionId = :questionId', {questionId});
        }
        const answers = await query.getMany();
        return answers;
    }

    async addAnswer(addAnswerDto: AddAnswerDto): Promise<Answer>{
        const {questionId , timestamp , answer , answeredBy , votes} = addAnswerDto;
        const answer1 = new Answer();

        answer1.questionId = questionId;
        answer1.timestamp = timestamp;
        answer1.answer = answer;
        answer1.answeredBy = answeredBy;
        answer1.votes = votes;
        await answer1.save();
        return answer1;
    }

}