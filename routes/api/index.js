var express = require("express");
var bcrypt = require("bcrypt");
var router = express.Router();
var User = require("../../models/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ success: true, message: "Welcome to Node APIs" });
});

module.exports = router;
