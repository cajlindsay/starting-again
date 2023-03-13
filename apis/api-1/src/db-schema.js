import { Schema } from 'mongoose';

export const carSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  }
});
