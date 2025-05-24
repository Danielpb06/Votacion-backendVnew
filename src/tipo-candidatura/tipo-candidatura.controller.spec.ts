import { Test, TestingModule } from '@nestjs/testing';
import { TipoCandidaturaController } from './tipo-candidatura.controller';
import { TipoCandidaturaService } from './tipo-candidatura.service';

describe('TipoCandidaturaController', () => {
  let controller: TipoCandidaturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoCandidaturaController],
      providers: [TipoCandidaturaService],
    }).compile();

    controller = module.get<TipoCandidaturaController>(TipoCandidaturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
