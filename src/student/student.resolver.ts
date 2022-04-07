import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { StudentInput } from './student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}
  @Query((returns) => [StudentType])
  students(): Promise<any> {
    return this.studentService.getAllStudents();
  }

  @Mutation((returns) => StudentType)
  createStudent(@Args('studentInput') studentInput: StudentInput) {
    return this.studentService.createStudent(studentInput);
  }
}
