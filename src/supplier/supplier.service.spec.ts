import { Test, TestingModule } from '@nestjs/testing';
import { supplierService } from './supplier.service';

describe('SupplierService', () => {
  let service: supplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [supplierService],
    }).compile();

    service = module.get<supplierService>(supplierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
