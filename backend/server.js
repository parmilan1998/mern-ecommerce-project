const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')

// Initialize the express application
const app = express()

// config.env file path
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })

// Middleware
app.use(express.json())

const products = require('./routes/product')
const orders = require('./routes/order')

app.use('/api/v1/', products)
app.use('/api/v1/', orders)

mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Database connected Successfully & listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`
        .yellow
    )
  })
})
