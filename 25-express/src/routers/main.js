const express = require("express");
const main = require("../controllers/main");
const userGuard = require("../middlewares/user-guard");

const router = express.Router();

router.get("/", main.home);
router.get("/cats", main.cats);

router.get("/adminSecure", userGuard(["user"]), main.admin);
router.get("/adminInsecure", userGuard(["everyone"]), main.admin);

module.exports = router;
