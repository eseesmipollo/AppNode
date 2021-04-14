const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({      
  name: String,
  surname: String,
  country: String,
  email: {
    type : String,
    unique: true,
    index: true,
    require: true
  },
  login : String,
  password : String
})

const User = mongoose.model('User', userSchema);

module.exports = User;