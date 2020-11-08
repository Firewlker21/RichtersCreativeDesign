const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
  },
  price: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('product', ProductSchema);
