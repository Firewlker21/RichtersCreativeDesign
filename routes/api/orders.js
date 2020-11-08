const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Product = require('../../models/product');
const Order = require('../../models/orders');

// @route     GET /api/orders
// @desc      get all orders
// @access    Admin

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.find().select('product quantity _id');

    const response = {
      count: orders.length,
      orders: orders.map(order => {
        return {
          _id: order.id,
          product: order.product,
          quantity: order.quantity,
        };
      }),
    };
    res.status(200).json(response);
  } catch (err) {
    console.err(err.message);
    res.status(500).json({ message: 'server error' });
  }
});

// @route     POST /api/orders
// @desc      Create order
// @access    Public

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.findById(req.body.productId);
    if (!product) {
      res.status(404).json({ message: 'NO such fucking product asshole' });
    } else {
      const newOrder = new Order({
        _id: new mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: product,
      });
      const order = await newOrder.save();
      res.status(201).json(order);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'serever error' });
  }
});

// @route     GET /api/orders/:orderID
// @desc      get order by id
// @access    Admin

router.get('/:orderID', async (req, res, next) => {
  try {
    const id = req.params.orderID;
    const order = await Order.findById(id);
    if (!order) {
      res.status(404).json({ message: 'No order found' });
    } else {
      res.status(200).json(order);
    }
  } catch (err) {
    console.err(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route     DELETE /api/orders/:orderID
// @desc      get order by id
// @access    Admin

router.delete('/:orderID', async (req, res, next) => {
  try {
    const id = req.params.orderID;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      res.status(404).json({ message: 'No order found' });
    } else {
      res.status(200).json({ message: 'Order deleted' });
    }
  } catch (err) {
    console.err(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
