const express = require("express");
const mainController = require("../controllers/main");
const userDataValidators = require("../validations/form-validation");
const validation = require("../middleware/validation");
const flashErrors = require("../middleware/flash-errors");

const router = express.Router();

router.get("/", flashErrors, mainController.home);
router.post("/", userDataValidators, validation, mainController.postHandler);

module.exports = router;
