const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');

const app = express();

connectDB();

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

app.use('/api/user', require('./routes/api/user'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/orders', require('./routes/api/orders'));
// app.use('/api/auth', require('./routes/api/auth'));

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
