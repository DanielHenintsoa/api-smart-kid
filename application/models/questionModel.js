var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var questionSchema = new Schema({
	'question' : String,
	'idCategorie' : mongoose.Schema.Types.ObjectId,
	'reponse' : String,
	'options' : Array,
	'audio' : String,
	'image' : String
});

var questionJoueursSchema = new Schema({
	'question' : String,
	'idCategorie' : mongoose.Schema.Types.ObjectId,
	'reponse' : String,
	'options' : Array,
	'audio' : String,
	'image' : String,
	'categorie' : Object,
	'joueurs': Array
});

var questionFiniSchema = new Schema({
	'idQuestion' : mongoose.Schema.Types.ObjectId,
	'idUser' : mongoose.Schema.Types.ObjectId
});

module.exports = {
	QuestionModel : mongoose.model('question', questionSchema, 'question'),
	QuestionCategorieModel : mongoose.model('question_categorie', questionSchema, 'question_categorie'),
	QuestionJoueursModel : mongoose.model('question_joueurs', questionJoueursSchema, 'question_joueurs'),
	QuestionFiniModel : mongoose.model('question_fini', questionFiniSchema, 'question_fini')
};
