import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonInput } from './lesson.input';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}
  @Query((returns) => [LessonType])
  lesson() {
    /* return {
      id: '1001',
      name: 'saravanan',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    }; */
    const lesson = this.lessonService.getLesson();
    return lesson;
  }

  @Mutation((returns) => LessonType)
  createLesson(@Args('createLessonInput') createLessonInput: LessonInput) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
