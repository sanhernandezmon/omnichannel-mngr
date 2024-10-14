import { Test, TestingModule } from '@nestjs/testing';
import { SnsService } from './sns.service';
import { ConfigService } from '@nestjs/config/dist/config.service';

describe('SnsService', () => {
  let service: SnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnsService, ConfigService],
    }).compile();

    service = module.get<SnsService>(SnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
