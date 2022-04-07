/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { LessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepo: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: LessonInput): Promise<Lesson> {
    const {name, startDate, endDate} = createLessonInput;
    const lesson = this.lessonRepo.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepo.save(lesson);
  }


  async getLesson(): Promise<Lesson[]> {
      const lessons = this.lessonRepo.find();
      return lessons;
  }
}
