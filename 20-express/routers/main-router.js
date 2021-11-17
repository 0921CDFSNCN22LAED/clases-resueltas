const express = require("express");
const mainController = require("../controllers/main-controller");

const router = express.Router();

router.get("/", mainController.home);
router.get("/detalle/:id", mainController.detail);

module.exports = router;
