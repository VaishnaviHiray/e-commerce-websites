const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true

    }

});

const productSchema = mongoose.model('products', Product);

module.exports = productSchema;