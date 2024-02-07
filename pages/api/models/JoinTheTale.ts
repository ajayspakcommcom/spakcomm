import mongoose, { Schema, models } from 'mongoose';

const joinTheTaleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10
  },
  file: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
export const JoinTheTale = mongoose.models.JoinTheTale || mongoose.model('JoinTheTale', joinTheTaleSchema);
