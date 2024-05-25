import { Injectable } from '@nestjs/common';
import { CreateAbilityDto } from 'src/users/dto/create-ability.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habilidad } from './entities/habilidad.entity';

@Injectable()
export class HabilidadesService {
  constructor(
    @InjectRepository(Habilidad)
    private habilidadesRepository: Repository<Habilidad>,
  ) {}

  create(createAbilityDto: CreateAbilityDto): Promise<Habilidad> {
    const ability = new Habilidad();
    ability.nombre = createAbilityDto.nombre;
    ability.poder = createAbilityDto.poder;
    ability.defensa = createAbilityDto.defensa;

    return this.habilidadesRepository.save(ability);
  }

  findAll(): Promise<Habilidad[]> {
    return this.habilidadesRepository.find();
  }

  findOne(id: number): Promise<Habilidad> {
    return this.habilidadesRepository.findOneBy({id});
  }

  async update(id: number, updateAbilityDto: CreateAbilityDto): Promise<Habilidad> {
    const ability = await this.findOne(id);
    ability.nombre = updateAbilityDto.nombre;
    ability.poder = updateAbilityDto.poder;
    ability.defensa = updateAbilityDto.defensa;
    return this.habilidadesRepository.save(ability);
  }

  async remove(id: number): Promise<void> {
    await this.habilidadesRepository.delete(id);
  }
}
