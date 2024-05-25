import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Superheroe } from 'src/superheroes/entities/superheroe.entity';

@Entity()
export class Liga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Superheroe, superheroe => superheroe.liga)
  superheroes: Superheroe[];
}
