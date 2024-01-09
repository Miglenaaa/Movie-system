import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releaseDate: string;

  @Column()
  budget: number;

  @Column('simple-array')
  actors: string[];

  @Column()
  profit: number;
}
