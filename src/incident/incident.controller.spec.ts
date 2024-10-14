import { Test, TestingModule } from '@nestjs/testing';
import { IncidentController } from './incident.controller';
import { SnsService } from '../sns/sns.service';

const snsServiceMock = jest.fn().mockReturnValue({publishMessage: jest.fn()})

describe('IncidentController', () => {
  let controller: IncidentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{provide: SnsService, useValue: snsServiceMock}],
      controllers: [IncidentController],
    }).compile();

    controller = module.get<IncidentController>(IncidentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
