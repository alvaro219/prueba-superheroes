import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superheroe } from './superheroe.entity';

@Injectable()
export class SuperheroeService {
  constructor(
    @InjectRepository(Superheroe)
    private superheroeRepository: Repository<Superheroe>,
  ) {}

  findAll(): Promise<Superheroe[]> {
    return this.superheroeRepository.find();
  }

  findOne(id: number): Promise<Superheroe> {
    return this.superheroeRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.superheroeRepository.delete(id);
  }
}