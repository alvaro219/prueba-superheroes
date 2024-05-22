import { Controller, Get, Param, Delete } from '@nestjs/common';
import { SuperheroeService } from './superheroe.service';
import { Superheroe } from './superheroe.entity';

@Controller('superheroes')
export class SuperheroeController {
  constructor(private readonly superheroeService: SuperheroeService) {}

  @Get()
  FindAll(): Promise<Superheroe[]> {
    return this.superheroeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Superheroe> {
    return this.superheroeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.superheroeService.remove(+id);
  }
}
