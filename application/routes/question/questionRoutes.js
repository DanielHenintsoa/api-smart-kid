const express = require('express');
const router = express.Router();
const questionController = require('../../controllers/questionController.js');

router.get('/:user/categorie/:categ', questionController.list);
router.post('/terminer', questionController.terminerQuestion);

module.exports = router;
