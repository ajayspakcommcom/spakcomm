import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema({
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
  message: {
    type: String,
    required: true,
    minlength: 2
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
export const User = mongoose.models.User || mongoose.model('User', userSchema);
