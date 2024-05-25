import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SuperheroeController } from './superheroes/superheroe.controller';
import { SuperheroeService } from './superheroes/superheroe.service';
import { Superheroe } from './superheroes/entities/superheroe.entity';
import { Habilidad } from './habilidades/entities/habilidad.entity';
import { Liga } from './liga/entities/liga.entity';
import { HabilidadesModule } from './habilidades/habilidad.module';
import { LigaModule } from './liga/liga.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'superheroes.sqlite',
      entities: [Superheroe, Habilidad, Liga],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([Superheroe, Habilidad, Liga]),
    HabilidadesModule,
    LigaModule,
  ],
  controllers: [AppController, SuperheroeController],
  providers: [AppService, SuperheroeService],
})
export class AppModule {}