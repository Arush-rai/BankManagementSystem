const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: String,
    dob: Date,
    gender: String,
    current_Address: String,
    permanent_Address: String,
    email: String,
    number: Number,
    pan: Number,
    aadhar: Number,
    acc_number: Number,
    Initial_Deposit_Amount: Number,
    tenure: Number,
    branch: String,
    ifsc: Number,

createdAt: { type: Date, default: Date.now }
});


module.exports = model('demanddeposit', mySchema);