import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabilidadesController } from './habilidades.controller';
import { HabilidadesService } from './habilidades.service';
import { Habilidad } from 'src/habilidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habilidad])],
  controllers: [HabilidadesController],
  providers: [HabilidadesService],
})
export class HabilidadesModule {}
