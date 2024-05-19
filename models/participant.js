const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  source: {
    type: String,
    enum: ['social media', 'friends', 'found yourself'],
    required: true,
  },
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
