const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ratings: {
    type: String,
  },
  images: [
    {
      image: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
  },
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
