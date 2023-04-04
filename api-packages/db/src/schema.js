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

export const personSchema = new Schema({
  givenName: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  }
});

export const deviceSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  }
});
