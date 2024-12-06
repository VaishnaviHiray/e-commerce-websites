var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());

let routes = require("./routes");
app.use("/userApp", routes);

app.listen(5000, function() {
    console.log("server listening at port no.5000");
});