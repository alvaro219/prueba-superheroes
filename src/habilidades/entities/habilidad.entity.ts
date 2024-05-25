import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Superheroe } from 'src/superheroes/entities/superheroe.entity';

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

  @OneToMany(() => Superheroe, superheroe => superheroe.habilidad)
  superheroes: Superheroe[];
}
