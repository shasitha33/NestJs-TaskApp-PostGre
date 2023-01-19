import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,  } from "typeorm";

@Entity()
export class Answer extends BaseEntity{
    @PrimaryGeneratedColumn()
    answerId : number;

    @Column()     
    questionId : number;

    @Column()
    timestamp: Date;

    @Column()
    answer: string;

    @Column()
    answeredBy : string;

    @Column()
    votes : number;
}