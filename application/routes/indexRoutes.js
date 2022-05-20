var express = require('express');
var router = express.Router();
var userRoutes = require("./user/userRoutes");
var categorieRoutes = require("./categorie/categorieRoutes");

router.use("/user", userRoutes);
router.use("/categorie", categorieRoutes);

module.exports = router;
