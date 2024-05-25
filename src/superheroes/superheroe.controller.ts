import { Controller, Get, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { SuperheroeService } from './superheroe.service';
import { Superheroe } from './entities/superheroe.entity';
import { CreateSuperheroeDto } from './dto/create-superheroe.dto';
import { UpdateSuperheroeDto } from './dto/update-superheroe.dto';

@Controller('superheroes')
export class SuperheroeController {
  constructor(private readonly superheroeService: SuperheroeService) {}

  @Get()
  findAll(): Promise<Superheroe[]> {
    return this.superheroeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Superheroe> {
    return this.superheroeService.findOne(+id);
  }

  @Post()
  create(@Body() createSuperheroeDto: CreateSuperheroeDto): Promise<Superheroe> {
    return this.superheroeService.create(createSuperheroeDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateSuperheroeDto: UpdateSuperheroeDto,
  ): Promise<Superheroe> {
    return this.superheroeService.update(id, updateSuperheroeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.superheroeService.remove(+id);
  }
}
