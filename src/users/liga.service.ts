import { Injectable } from '@nestjs/common';
import { CreateLeagueDto } from './create-league.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Liga } from 'src/liga.entity';

@Injectable()
export class LigaService {
  constructor(
    @InjectRepository(Liga)
    private ligaRepository: Repository<Liga>,
  ) {}

  create(createLeagueDto: CreateLeagueDto): Promise<Liga> {
    const liga = new Liga();
    liga.nombre = createLeagueDto.nombre;
    return this.ligaRepository.save(liga);
  }

  findAll(): Promise<Liga[]> {
    return this.ligaRepository.find({ relations: ['superheroes'] });
  }

  findOne(id: number): Promise<Liga> {
    return this.ligaRepository.findOne({
      where: { id },
      relations: ['superheroes'],
    });
  }

  async update(id: number, updateLeagueDto: CreateLeagueDto): Promise<Liga> {
    const liga = await this.findOne(id);
    liga.nombre = updateLeagueDto.nombre;
    return this.ligaRepository.save(liga);
  }

  async remove(id: number): Promise<void> {
    await this.ligaRepository.delete(id);
  }
}
