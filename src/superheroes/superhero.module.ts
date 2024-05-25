import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Superheroe } from './entities/superheroe.entity';
import { SuperheroeService } from './superheroe.service';
import { SuperheroeController } from './superheroe.controller';
import { Habilidad } from '../habilidades/entities/habilidad.entity';
import { Liga } from '../liga/entities/liga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Superheroe, Habilidad, Liga])],
  controllers: [SuperheroeController],
  providers: [SuperheroeService],
})
export class SuperheroeModule {}
