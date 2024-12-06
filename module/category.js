var mongoose = require("mongoose");
let category = new mongoose.Schema({
        userId: {},

        items: [{
            productName: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            quantity: {
                type: String
            },
        }]
    }

);

const categorySchema = mongoose.model("catRec", category);
module.exports = categorySchema;