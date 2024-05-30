const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  predictions: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('Image', ImageSchema);
