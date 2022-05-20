var express = require('express');
var router = express.Router();
var categorieController = require('../../controllers/categorieController.js');

router.get('/', categorieController.list);
router.get('/:id', categorieController.show);

module.exports = router;
