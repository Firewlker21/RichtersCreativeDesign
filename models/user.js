const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
  },
  email:{
      type: String,
      required: true,
      unique: true,
  },
  password: { 
      type: String,
      required: true,
  },
  isAdmin: {
      type: Boolean,
        required: true,
        default: false
  },
  date: {
    type: Date,
    default: Date.now
},
 
});

module.exports = mongoose.model('user', UserSchema);
