import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superheroe } from './entities/superheroe.entity';
import { CreateSuperheroeDto } from './dto/create-superheroe.dto';
import { UpdateSuperheroeDto } from './dto/update-superheroe.dto';

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
    return this.superheroeRepository.findOneBy({ id });
  }

  async create(createSuperheroeDto: CreateSuperheroeDto): Promise<Superheroe> {
    const superheroe = this.superheroeRepository.create(createSuperheroeDto);
    return this.superheroeRepository.save(superheroe);
  }

  async update(id: number, updateSuperheroeDto: UpdateSuperheroeDto): Promise<Superheroe> {
    await this.superheroeRepository.update(id, updateSuperheroeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.superheroeRepository.delete(id);
  }
}
