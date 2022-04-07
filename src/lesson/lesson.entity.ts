import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Lesson {
  @ObjectIdColumn({ nullable: true })
  _id: string;
  @PrimaryColumn()
  id: string;
  @Column({ nullable: true })
  name: string;
  @Column({ nullable: true })
  startDate: string;
  @Column({ nullable: true })
  endDate: string;
}
