import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    CustomersModule,
    MongooseModule.forRoot('mongodb+srv://bassem:bassem@bassem.afondwx.mongodb.net/?retryWrites=true&w=majority'),
  ],
})
export class AppModule {}
