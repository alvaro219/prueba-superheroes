import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/jwt.strategy/auth.module';
import { UsersModule } from './users/users.module';
import { SuperheroeController } from './superheroe.controller';
import { SuperheroeService } from './superheroe.service';
import { Superheroe } from './superheroe.entity';
import { Habilidad } from './habilidad.entity';
import { Liga } from './liga.entity';
import { HabilidadesModule } from './users/habilidad.module';
import { LigaModule } from './users/liga.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'superheroes.sqlite',
      entities: [Superheroe, Habilidad, Liga],
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: 'password',
      // database: 'superheroes',
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([Superheroe, Habilidad, Liga]),
    HabilidadesModule,
    LigaModule
  ],
  controllers: [AppController, SuperheroeController],
  providers: [AppService, SuperheroeService],
})
export class AppModule {}
