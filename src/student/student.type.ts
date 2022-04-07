import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { LessonType } from 'src/lesson/lesson.type';

@ObjectType('Student')
export class StudentType {
  @Field((type) => Int)
  rollNo: number;
  @Field((type) => String)
  firstName: string;
  @Field((type) => String)
  lastName: string;
  @Field((type) => [LessonType], { nullable: true })
  lessons: LessonType[];
}
