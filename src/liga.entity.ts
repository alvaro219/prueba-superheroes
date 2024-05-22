import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Liga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
