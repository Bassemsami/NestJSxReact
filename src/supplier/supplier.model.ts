import * as mongoose from 'mongoose';

export const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: false },
  location: { type: String, required: false },
  supplies: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export interface supplier extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  location: string;
  supplies: string;
  createdAt: Date;
}
