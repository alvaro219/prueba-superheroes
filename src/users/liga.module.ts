import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LigaController } from './liga.controller';
import { LigaService } from './liga.service';
import { Liga } from 'src/liga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Liga])],
  controllers: [LigaController],
  providers: [LigaService],
})
export class LigaModule {}
