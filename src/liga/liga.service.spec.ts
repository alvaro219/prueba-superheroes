import { Test, TestingModule } from '@nestjs/testing';
import { LigaService } from './liga.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Liga } from './entities/liga.entity';
import { Repository } from 'typeorm';

describe('LigaService', () => {
  let service: LigaService;
  let repository: Repository<Liga>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LigaService,
        {
          provide: getRepositoryToken(Liga),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<LigaService>(LigaService);
    repository = module.get<Repository<Liga>>(getRepositoryToken(Liga));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a league', async () => {
    const createLeagueDto = { nombre: 'Liga de la Justicia' };
    const liga = new Liga();
    liga.nombre = 'Liga de la Justicia';

    jest.spyOn(repository, 'save').mockResolvedValue(liga);

    expect(await service.create(createLeagueDto)).toEqual(liga);
  });

  it('should return all leagues', async () => {
    const liga1 = new Liga();
    liga1.nombre = 'Liga de la Justicia';
    const liga2 = new Liga();
    liga2.nombre = 'Liga de los Villanos';

    jest.spyOn(repository, 'find').mockResolvedValue([liga1, liga2]);

    expect(await service.findAll()).toEqual([liga1, liga2]);
  });

  it('should return a single league by ID', async () => {
    const liga = new Liga();
    liga.id = 1;
    liga.nombre = 'Liga de la Justicia';

    jest.spyOn(repository, 'findOne').mockResolvedValue(liga);

    expect(await service.findOne(1)).toEqual(liga);
  });

  it('should update a league', async () => {
    const liga = new Liga();
    liga.id = 1;
    liga.nombre = 'Liga de la Justicia';

    jest.spyOn(repository, 'findOne').mockResolvedValue(liga);
    jest.spyOn(repository, 'save').mockResolvedValue(liga);

    const updateLeagueDto = { nombre: 'Liga de la Justicia Actualizada' };
    liga.nombre = updateLeagueDto.nombre;

    expect(await service.update(1, updateLeagueDto)).toEqual(liga);
  });

  it('should remove a league', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

    expect(await service.remove(1)).toBeUndefined();
  });
});
