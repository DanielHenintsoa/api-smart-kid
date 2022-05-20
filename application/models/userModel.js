var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'email' : String,
	'mdp' : String,
	'pseudo' : String
});

module.exports = mongoose.model('utilisateur', userSchema, 'utilisateur');
