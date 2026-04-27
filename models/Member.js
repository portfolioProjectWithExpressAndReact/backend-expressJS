const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est obligatoire'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Le rôle est obligatoire'],
    trim: true
  }
});