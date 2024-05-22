import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Habilidad } from './habilidad.entity';
import { Liga } from './liga.entity';

@Entity()
export class Superheroe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @ManyToOne(() => Habilidad)
  @JoinColumn()
  habilidad: Habilidad;

  @ManyToOne(() => Liga)
  @JoinColumn()
  liga: Liga;
}
