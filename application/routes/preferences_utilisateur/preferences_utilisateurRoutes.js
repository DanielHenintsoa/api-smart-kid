var express = require('express');
var router = express.Router();
var preferences_utilisateurController = require('../../controllers/preferences_utilisateurController.js');

router.get('/:idUser', preferences_utilisateurController.getPreferencesUtilisateur);

module.exports = router;
