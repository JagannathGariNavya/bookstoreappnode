const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Customer = require('../models/Customer');
// const { SQLModels } = require('../models');
// const {SQLModels} =require('../models')
// const Customer = SQLModels.Customer;

const generateAccessToken = (customerId) => {
  return jwt.sign({ customerId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
};

const authenticateCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ where: { email } });
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, customer.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const accessToken = generateAccessToken(customer.id);
    res.json({ accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


const registerCustomer = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    try {
      // Check if the customer already exists
      const existingCustomer = await Customer.findOne({ where: { email } });
      if (existingCustomer) {
        return res.status(400).json({ message: 'Customer already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new customer
      const newCustomer = await Customer.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json(newCustomer);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  module.exports = { authenticateCustomer, registerCustomer };
