const express = require('express');

const router = express.Router();
const Model = require('../models/fixedModel');

const sendReceiptEmail = require('../emailService');





router.post('/add', async (req, res) => {
    try {
      // Save the form data to the database first
      const formData = req.body;
      const result = await new Model(formData).save();
      
      // Send the receipt email
      await sendReceiptEmail(formData.email, formData);
      
      // Respond after both operations are complete
      res.status(200).json(result);
    } catch (error) {
      console.error('Error saving data or sending email:', error);
      res.status(500).send('Error occurred while processing your request.');
    }
  });

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})
router.get('/getbyemail/:email', (req, res) => {
    Model.find({email : req.params.email})      
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})

module.exports = router;