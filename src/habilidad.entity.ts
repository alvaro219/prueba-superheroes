import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Habilidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  poder: number;

  @Column()
  defensa: number;
}
