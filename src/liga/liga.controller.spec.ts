import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LigaModule } from '../liga/liga.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Liga } from './entities/liga.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('LigaController (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<Liga>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        LigaModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Liga],
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    repository = moduleFixture.get<Repository<Liga>>(getRepositoryToken(Liga));

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/liga (GET)', async () => {
    const liga = new Liga();
    liga.nombre = 'Liga de la Justicia';
    await repository.save(liga);

    return request(app.getHttpServer())
      .get('/liga')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].nombre).toBe('Liga de la Justicia');
      });
  });

  it('/liga/:id (GET)', async () => {
    const liga = new Liga();
    liga.nombre = 'Liga de la Justicia';
    const savedLiga = await repository.save(liga);

    return request(app.getHttpServer())
      .get(`/liga/${savedLiga.id}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body.nombre).toBe('Liga de la Justicia');
      });
  });

  it('/liga (POST)', async () => {
    const createLeagueDto = { nombre: 'Liga de la Justicia' };

    return request(app.getHttpServer())
      .post('/liga')
      .send(createLeagueDto)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body.nombre).toBe('Liga de la Justicia');
      });
  });

  it('/liga/:id (PUT)', async () => {
    const liga = new Liga();
    liga.nombre = 'Liga de la Justicia';
    const savedLiga = await repository.save(liga);
    const updateLeagueDto = { nombre: 'Liga de la Justicia Actualizada' };

    return request(app.getHttpServer())
      .put(`/liga/${savedLiga.id}`)
      .send(updateLeagueDto)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body.nombre).toBe('Liga de la Justicia Actualizada');
      });
  });

  it('/liga/:id (DELETE)', async () => {
    const liga = new Liga();
    liga.nombre = 'Liga de la Justicia';
    const savedLiga = await repository.save(liga);

    return request(app.getHttpServer())
      .delete(`/liga/${savedLiga.id}`)
      .expect(200)
      .expect(res => {
        expect(res.body).toEqual({});
      });
  });
});
