import { Test, TestingModule } from '@nestjs/testing';
import { Library1Service } from './library1.service';

describe('Library1Service', () => {
  let service: Library1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Library1Service],
    }).compile();

    service = module.get<Library1Service>(Library1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
