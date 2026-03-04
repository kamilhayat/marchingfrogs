import mongoose, { Schema, Document } from 'mongoose';

export interface IQuote extends Document {
  name: string;
  email: string;
  projectType?: string;
  subject?: string;
  relevantPatents?: string;
  additionalDetails?: string;
  referredBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    projectType: { type: String },
    subject: { type: String },
    relevantPatents: { type: String },
    additionalDetails: { type: String },
    referredBy: { type: String },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Quote ||
  mongoose.model<IQuote>('Quote', QuoteSchema);
