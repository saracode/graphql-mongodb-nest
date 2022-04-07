import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, MaxLength, MinLength } from 'class-validator';
import { truncate } from 'fs';
import { LessonInput } from '../lesson/lesson.input';

@InputType()
export class StudentInput {
  @Field()
  @IsNumber()
  rollNo: number;
  @Field()
  @MinLength(1)
  firstName: string;
  @Field()
  @MinLength(1)
  lastName: string;
  @Field((type) => [LessonInput])
  lessons: [LessonInput];
}
