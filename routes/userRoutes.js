const express = require("express");
const {
  getAllUsers,
  registercontrollers,
  logInController,
} = require("../controllers/userController");

const router = express.Router();
// get all users
router.get("/all-users", getAllUsers);
// create users
router.post("/register", registercontrollers);
// login user
router.post("/login", logInController);
module.exports = router;
