// src/supplier/supplier.module.ts
import { Module } from '@nestjs/common';
import { supplierController } from './supplier.controller';
import { supplierService } from './supplier.service';
import { MongooseModule } from '@nestjs/mongoose';
import { supplierSchema } from './supplier.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'supplier', schema: supplierSchema }])
  ],
  controllers: [supplierController],
  providers: [supplierService]
})
export class supplierModule {}
