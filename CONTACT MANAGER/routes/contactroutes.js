const express = require("express");
const router = express.Router();
const {
  getContacts,
  CreateContact,
  getContact,
  updateContact,
  deleteContact} = require("../controllers/contactController");

router.route("/").get(getContacts).post(CreateContact);

router.route("/").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;
