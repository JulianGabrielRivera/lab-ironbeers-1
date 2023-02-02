var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const picture = "../images/beer.png";
  res.render("index.hbs", { picture });
});

module.exports = router;
