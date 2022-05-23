const express = require('express');
const router = express.Router();
const userRoutes = require("./user/userRoutes");
const categorieRoutes = require("./categorie/categorieRoutes");
const questionRoutes = require("./question/questionRoutes");
const videoCategorieRoutes = require("./video_categorie/video_categorieRoutes")
const preferencesUtilisateurRoutes = require("./preferences_utilisateur/preferences_utilisateurRoutes")

router.use("/user", userRoutes);
router.use("/categorie", categorieRoutes);
router.use("/question", questionRoutes);
router.use("/video-categorie", videoCategorieRoutes);
router.use("/preferences", preferencesUtilisateurRoutes);

module.exports = router;
