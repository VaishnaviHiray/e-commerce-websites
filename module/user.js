var mongooes = require("mongoose");
let User = new mongooes.Schema({

    name: String,
    mobileno: String,
    email: String,
    password: String

});
const userSchema = mongooes.model("user", User);
module.exports = userSchema;