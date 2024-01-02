import { supplierService } from './supplier.service';
import { supplier } from './supplier.model';
export declare class supplierController {
    private readonly supplierService;
    constructor(supplierService: supplierService);
    findAll(): Promise<supplier[]>;
    findOne(id: string): Promise<supplier>;
    create(createsupplierDto: any): Promise<supplier>;
    update(id: string, updatesupplierDto: any): Promise<supplier>;
    delete(id: string): Promise<any>;
}
