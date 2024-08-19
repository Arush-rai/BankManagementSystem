const { model, Schema } = require('../connection');

const mySchema = new Schema({
    holder_name: String,
    acc_number: Number,
    fd_number: Number,
    gender: String,
    address: String,
    contact: Number,
    email: String,
    pan: Number,
    tenure: Number,
    amount: Number,
    branch: String,
    ifsc: Number,
    renewal: Number,
    createdAt: { type: Date, default: Date.now }
});


module.exports = model('fixeddeposit', mySchema);