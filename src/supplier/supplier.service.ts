import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { supplier } from './supplier.model'; 

@Injectable()
export class supplierService {
  constructor(@InjectModel('supplier') private readonly supplierModel: Model<supplier>) {}

  async findAll(): Promise<supplier[]> {
    return await this.supplierModel.find().exec();
  }

  async findOne(id: string): Promise<supplier> {
    const supplier = await this.supplierModel.findById(id).exec();
    if (!supplier) {
      throw new NotFoundException(`supplier with ID ${id} not found`);
    }
    return supplier;
  }

  async create(createsupplierDto: any): Promise<supplier> { 
    const newsupplier = new this.supplierModel(createsupplierDto);
    return await newsupplier.save();
  }

  async update(id: string, updatesupplierDto: any): Promise<supplier> { 
    const updatedsupplier = await this.supplierModel.findByIdAndUpdate(id, updatesupplierDto, { new: true }).exec();
    if (!updatedsupplier) {
      throw new NotFoundException(`supplier with ID ${id} not found`);
    }
    return updatedsupplier;
  }

  async delete(id: string): Promise<any> {
    const deletedsupplier = await this.supplierModel.findByIdAndDelete(id).exec();
    if (!deletedsupplier) {
      throw new NotFoundException(`supplier with ID ${id} not found`);
    }
    return deletedsupplier;
  }
}
