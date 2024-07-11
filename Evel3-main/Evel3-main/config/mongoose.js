const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000 
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Unable to connect to MongoDB:', err);
  }
};

connectToDb();

module.exports = mongoose;
