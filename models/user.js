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

module.exports = mongoose.model("User", schema);

