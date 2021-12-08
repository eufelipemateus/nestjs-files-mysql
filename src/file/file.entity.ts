import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('files')
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file: string;

  @Column()
  content_type: string;

  @Column('longblob')
  data: string;
}
