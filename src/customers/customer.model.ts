import * as mongoose from 'mongoose';

// TypeScript Interface
export interface Customer {
  id?: string;
  name: string;
  email: string;
  createdAt?: Date;
}

// Mongoose Schema
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// Mongoose Model
const CustomerModel = mongoose.model<Customer & mongoose.Document>('Customer', customerSchema);

export default CustomerModel;
