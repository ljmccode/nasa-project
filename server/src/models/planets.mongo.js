const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true
  }
});

module.exports = mongooose.model('Planet', planetSchema);