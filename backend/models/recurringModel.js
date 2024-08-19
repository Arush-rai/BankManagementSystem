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
    each_deposit_Amount: Number, //The amount you are depositing to open the account.
    tenure:Number,
    branch: String,
    ifsc: Number,

createdAt: { type: Date, default: Date.now }
});
module.exports = model('recurringdeposit', mySchema);