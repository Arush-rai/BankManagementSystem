const express = require('express');

const router = express.Router();
const Model = require('../models/fixedModel');

const sendReceiptEmail = require('../emailService');

function calculateFDMaturity(principal, years, rate = 9) {
    const maturityAmount = principal * Math.pow((1 + rate / 100), years);
    return maturityAmount;
}

function calculateInterest(principal, years) {
    const amt = calculateFDMaturity(principal, years);
    return amt - (principal);
}

const calculateMaturityDate = (date, tenure) => {
    let d = new Date();
    d.setFullYear(d.getFullYear() + tenure);
    return d.toLocaleDateString()
}

router.post('/add', async (req, res) => {
    try {
        // Save the form data to the database first
        const formData = req.body;
        const result = await new Model(formData).save();
        const maturityAmount = calculateFDMaturity(formData.amount, formData.tenure).toFixed(2);
        const interest = calculateInterest(formData.amount, formData.tenure).toFixed(2);
        const maturityDate = calculateMaturityDate(formData.createdAt, formData.tenure);
        // Send the receipt email
        await sendReceiptEmail(formData.email, {...formData, maturityAmount, interest, maturityDate});

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
    Model.find({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})

module.exports = router;