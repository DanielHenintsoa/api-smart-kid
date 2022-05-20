var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var categorieSchema = new Schema({
	'libelle' : String,
	'image' : String
});

module.exports = mongoose.model('categorie', categorieSchema, 'categorie');
