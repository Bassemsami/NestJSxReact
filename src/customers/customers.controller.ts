import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.model';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async findAll() {
    return this.customersService.findAll();
  }


  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: any): Promise<Customer> { 
    return this.customersService.create(createProductDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: any): Promise<Customer> { 
    return this.customersService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.customersService.delete(id);
  }
  // Add POST, DELETE routes
}
