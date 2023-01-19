import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Question extends BaseEntity{

    @PrimaryGeneratedColumn()
    questionId : string;

    @Column()
    question: string;

    @Column()
    timestamp: Date;

    @Column()
    askedById: string;

    @Column()
    votes: number;

    @Column()
    isOpen: boolean;

    @Column()
    categoryId: string;

    @Column()
    topic: string;

    @Column()
    lastUpdated: Date;

}