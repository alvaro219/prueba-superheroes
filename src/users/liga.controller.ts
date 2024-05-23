import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateLeagueDto } from './create-league.dto';
import { LigaService } from './liga.service'; // Importa LigaService

@Controller('liga')
export class LigaController {
  constructor(private readonly ligaService: LigaService) {} // Inyecta LigaService en el constructor

  @Post()
  create(@Body() createLeagueDto: CreateLeagueDto) {
    return this.ligaService.create(createLeagueDto);
  }

  @Get()
  findAll() {
    return this.ligaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ligaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateLeagueDto: CreateLeagueDto) {
    return this.ligaService.update(+id, updateLeagueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ligaService.remove(+id);
  }
}