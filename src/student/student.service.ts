import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { StudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentsRepo: Repository<Student>,
  ) {}

  async getAllStudents() {
    return this.studentsRepo.find({});
  }

  async createStudent(studentInput: StudentInput): Promise<Student> {
    const student = this.studentsRepo.create(studentInput);
    return this.studentsRepo.save(student);
  }
}
