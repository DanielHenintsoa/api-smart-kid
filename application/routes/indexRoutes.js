const express = require('express');
const router = express.Router();
const userRoutes = require("./user/userRoutes");
const categorieRoutes = require("./categorie/categorieRoutes");
const questionRoutes = require("./question/questionRoutes");

router.use("/user", userRoutes);
router.use("/categorie", categorieRoutes);
router.use("/question", questionRoutes);

module.exports = router;
