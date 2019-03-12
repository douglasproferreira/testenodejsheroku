const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PublishSchema = new mongoose.Schema({
  photo: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PublishSchema.plugin(mongoosePaginate);

mongoose.model('Publish', PublishSchema);