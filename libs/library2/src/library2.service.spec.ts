import { Test, TestingModule } from '@nestjs/testing';
import { Library2Service } from './library2.service';

describe('Library2Service', () => {
  let service: Library2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Library2Service],
    }).compile();

    service = module.get<Library2Service>(Library2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
