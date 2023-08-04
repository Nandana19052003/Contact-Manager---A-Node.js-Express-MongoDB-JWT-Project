// routes/userroutes.js
const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/usercontroller");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
