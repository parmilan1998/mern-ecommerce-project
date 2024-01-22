const ProductModel = require('../models/productModel')

// Get all products -> /api/v1/products
exports.getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({})
    return res.status(200).json({
      success: true,
      products,
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
}

// Get single Product -> /api/v1/products/:id
exports.getSingleProducts = async (req, res) => {
  try {
    const { id } = req.params
    const product = await ProductModel.findById(id)
    return res.status(200).json(product)
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
}
