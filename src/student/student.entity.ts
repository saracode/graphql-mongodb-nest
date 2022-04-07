import { LessonInput } from 'src/lesson/lesson.input';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
@Entity()
export class Student {
  @ObjectIdColumn({ nullable: true })
  _id: string;
  @PrimaryColumn()
  rollNo: number;
  @Column({ nullable: true })
  firstName: string;
  @Column({ nullable: true })
  lastName: string;
  @Column({ nullable: true })
  lessons: LessonInput[];
}
