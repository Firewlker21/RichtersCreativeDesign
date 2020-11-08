const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/user');

// @route     get /api/user
// @desc      get all users
// @access    Private

// @route     POST /api/user/register
// @desc      create new user
// @access    Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please input a valid email').isEmail(),
    check(
      'password',
      ' Please enter a password of at least 6 characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, email, password } = req.body;
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: 'User alreasy exists' }] });
      } else {
        user = new User({
          _id: mongoose.Types.ObjectId(),
          email,
          password,
          name: {
            firstName: name.firstName,
            lastName: name.lastName,
          },
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @route     get /api/user/:userID
// @desc      get  user by ID
// @access    Private

module.exports = router;
