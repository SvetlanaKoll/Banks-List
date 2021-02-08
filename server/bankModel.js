//using mongoose to create a bank schema - describing and validating
const mongoose = require('mongoose');


const bankSchema = new mongoose.Schema({
    bank_name: {
        type: String
    },
    interest_rate: {
        type: Number
    },
    maximum_loan: {
        type: Number
    },
    maximum_down_payment: {
        type: Number
    }
});
const Bank = new mongoose.model('Bank', bankSchema);
module.exports = Bank
