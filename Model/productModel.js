const mongoose = require('mongoose');
const sschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})
const Product = mongoose.model('Product', sschema)
module.exports = Product;