/**
 * creation of User model.
*/

const mongoose = require("../dbConnection");
const schema = new mongoose.Schema(
  {
    firstname: {
      desc: "The user's first name in string.",
      trim: true,
      type: String,
      required: true,
    },
    lastname: {
      desc: "The user's last name in string.",
      trim: true,
      type: String,
      required: true,
    },
  },
);

var User = module.exports = mongoose.model("User", schema);

module.exports.getUserByUsername = function (firstname, callback) {
  var query = { firstname: firstname };
  User.findOne(query, callback);
};

module.exports.createUser = function (newUser, callback) {
  newUser.save(callback);
};