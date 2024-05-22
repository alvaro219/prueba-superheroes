import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Habilidad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
}