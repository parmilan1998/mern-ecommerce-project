const OrderModel = require('../models/orderModel')

// create a order -> /api/v1/order
exports.createOrders = async (req, res) => {
  try {
    const cartItems = req.body
    const amount = Number(
      cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
    ).toFixed(2)
    const status = 'Pending'
    const order = await OrderModel.create({ cartItems, amount, status })
    res.status(200).json({ order })
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
}
