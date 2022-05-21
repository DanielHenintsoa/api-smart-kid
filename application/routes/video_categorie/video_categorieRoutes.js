var express = require('express');
var router = express.Router();
var video_categorieController = require('../../controllers/video_categorieController.js');

router.get('/:idCategorie', video_categorieController.getVideoCategorie);

module.exports = router;
