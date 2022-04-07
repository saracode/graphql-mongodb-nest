import { InputType, Field } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class LessonInput {
  @Field()
  @MinLength(1)
  name: string;
  @Field()
  @IsDateString()
  startDate: string;
  @Field()
  @IsDateString()
  endDate: string;
}
