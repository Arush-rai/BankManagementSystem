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
    Acc_number: Number,
    amount: Number, //The amount you are depositing to open the account.
  
createdAt: { type: Date, default: Date.now }
});


module.exports = model('savingdeposit', mySchema);