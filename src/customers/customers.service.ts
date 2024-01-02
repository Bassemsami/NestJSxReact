import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './customer.model';  // Import the interface

@Injectable()
export class CustomersService {
  constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) {}

  async findAll(): Promise<Customer[]> {  // Use the Customer type
    return this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer> {
    const Customer = await this.customerModel.findById(id).exec();
    if (!Customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return Customer;
  }

  async create(createCustomerDto: any): Promise<Customer> { 
    const newCustomer = new this.customerModel(createCustomerDto);
    return await newCustomer.save();
  }

  async update(id: string, updateCustomerDto: any): Promise<Customer> { 
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(id, updateCustomerDto, { new: true }).exec();
    if (!updatedCustomer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return updatedCustomer;
  }

  async delete(id: string): Promise<any> {
    const deletedCustomer = await this.customerModel.findByIdAndDelete(id).exec();
    if (!deletedCustomer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return deletedCustomer;
  }
}
