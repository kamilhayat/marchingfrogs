import mongoose, { Schema, Document } from 'mongoose';

export interface IQuote extends Document {
  name: string;
  email: string;
  projectType: string;
  relevantPatents: string;
  additionalDetails: string;
  referredBy: string;
  createdAt: Date;
}

const QuoteSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  projectType: { type: String, required: true },
  relevantPatents: { type: String },
  additionalDetails: { type: String },
  referredBy: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Quote ||
  mongoose.model<IQuote>('Quote', QuoteSchema);
