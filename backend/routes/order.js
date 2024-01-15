const express = require('express')
const { createOrders } = require('../controllers/orderController')
const router = express.Router()

router.route('/orders').post(createOrders)

module.exports = router
