import { CustomersService } from './customers.service';
import { Customer } from './customer.model';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<Customer[]>;
    findOne(id: string): Promise<Customer>;
    create(createProductDto: any): Promise<Customer>;
    update(id: string, updateProductDto: any): Promise<Customer>;
    delete(id: string): Promise<any>;
}
