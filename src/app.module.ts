import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/jwt.strategy/auth.module';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'superheroes',
    entities: [join(__dirname +'**', '*.entity.{ts,js}')],
    synchronize: true, 
    }),
    AuthModule, UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
