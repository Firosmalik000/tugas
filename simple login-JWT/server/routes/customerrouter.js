const router = require('express').Router();
const Customer = require('../models/customermodel');
const Auth = require('../middleware/auth');

router.post('/', Auth, async (req, res) => {
  try {
    const { name } = req.body;
    const newCustomer = new Customer({
      name,
    });
    const saveCostumer = await newCustomer.save();
    res.json(saveCostumer);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.get('/', Auth, async (req, res) => {
  try {
    const customerss = await Customer.find();
    res.json(customerss);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
