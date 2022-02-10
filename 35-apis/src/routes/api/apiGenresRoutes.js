// /api/genres

const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send({
    foo: "bar",
    frutas: ["manzana", "pera", "uva"],
  });
});
module.exports = router;
