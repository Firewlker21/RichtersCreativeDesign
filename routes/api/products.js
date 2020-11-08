const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    filesize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const Product = require('../../models/product');

// @route     GET /api/products
// @desc      get all products
// @access    Public
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find().select(
      'name header description price _id productImage'
    );
    const response = {
      count: products.length,
      products: products.map(product => {
        return {
          _id: product.id,
          name: product.name,
          description: product.description,
          header: product.header,
          price: product.price,
          productImage: product.productImage,
          request: {
            type: 'GET',
            url: 'http://localhost:5000/api/products/' + product._id,
          },
        };
      }),
    };
    return res.json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route     POST /api/products
// @desc      create new product
// @access    Private/Admin

router.post('/', upload.single('productImage'), async (req, res, next) => {
  try {
    console.log(req.file);
    const newProduct = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      header: req.body.header,
      description: req.body.description,
      price: req.body.price,
      productImage: req.file.path,
      category: req.body.category,
    });

    const product = await newProduct.save();

    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route     GET /api/products/:id
// @desc      get product by id
// @access    Public
router.get('/:productId', async (req, res, next) => {
  const id = req.params.productId;

  try {
    const product = await Product.findById(id);
    res.send(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PATCH /api/products/:id
// @desc      update product
// @access    Admin
router.patch('/:productId', async (req, res, next) => {
  try {
    const id = req.params.productId;
    const update = req.body;
    const options = { new: true };
    const product = await Product.findByIdAndUpdate(id, update, options);
    res.json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route     PATCH /api/products/:id
// @desc      update product
// @access    Admin

router.delete('/:productId', async (req, res, next) => {
  try {
    await Product.findByIdAndRemove({ _id: req.params.productId });
    res.json({ msg: 'Product deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
