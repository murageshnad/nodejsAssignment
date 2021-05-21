var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./dbConnection");
const router = express.Router();
/**
 * parse requests of content-type - application/json
 */
app.use(bodyParser.json());
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", require("./routes/user_routes"));
app.listen(4000);
console.log("Listening to PORT 8000--");