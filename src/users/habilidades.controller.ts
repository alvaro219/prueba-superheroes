import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { HabilidadesService } from './habilidades.service';
import { CreateAbilityDto } from './create-ability.dto';

@Controller('habilidades')
export class HabilidadesController {
  constructor(private readonly habilidadesService: HabilidadesService) {}

  @Post()
  create(@Body() createAbilityDto: CreateAbilityDto) {
    return this.habilidadesService.create(createAbilityDto);
  }

  @Get()
  findAll() {
    return this.habilidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habilidadesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAbilityDto: CreateAbilityDto) {
    return this.habilidadesService.update(+id, updateAbilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habilidadesService.remove(+id);
  }
}
