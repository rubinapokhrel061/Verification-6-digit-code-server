const express = require("express");
const VerificationController = require("../controller/verificationController.js");
const router = express.Router();

// Define routes
router.post(
  "/verify",

  VerificationController.verify
);

module.exports = router;
