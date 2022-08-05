const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);