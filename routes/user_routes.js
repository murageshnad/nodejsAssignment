/**
 * routes using express middleware for routing
 */
const express = require("express");
const router = express.Router();
const userControllr = require("../controller/user_controller");

//routes
router.get("/users", userControllr.findAll);
router.post("/user", userControllr.create);
router.put("/user/:id", userControllr.UpdateUser);
router.delete("/user/:id", userControllr.delete);
module.exports = router;
