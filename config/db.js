const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to DB');
  } catch (err) {
    console.error(err.message);
    //Exit process if error
    process.exit(1);
  }
};
module.exports = connectDB;
