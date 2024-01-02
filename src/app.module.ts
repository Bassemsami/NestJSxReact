import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { supplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    supplierModule,
    MongooseModule.forRoot('mongodb+srv://bassem:bassem@bassem.afondwx.mongodb.net/?retryWrites=true&w=majority'),
  ],
})
export class AppModule {}
