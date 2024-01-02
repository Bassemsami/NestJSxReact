import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { supplierService } from './supplier.service';
import { supplier } from './supplier.model'; 

@Controller('suppliers')
export class supplierController {
  constructor(private readonly supplierService: supplierService) {}

  @Get()
  async findAll(): Promise<supplier[]> {
    return this.supplierService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<supplier> {
    return this.supplierService.findOne(id);
  }

  @Post()
  async create(@Body() createsupplierDto: any): Promise<supplier> { 
    return this.supplierService.create(createsupplierDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatesupplierDto: any): Promise<supplier> { 
    return this.supplierService.update(id, updatesupplierDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.supplierService.delete(id);
  }
}
