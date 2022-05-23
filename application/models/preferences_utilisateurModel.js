var mongoose = require('mongoose');
require("./userModel")

const PreferencesUtilisateurSchema = new mongoose.Schema({
	idUtilisateur: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"utilisateur",
		required:true
	},
	vibration: {
		type: Object,
		required:true
	},
	display: {
		type: Object,
		required:true
	}
});
  
const PreferencesUtilisateurModel = mongoose.model("preferencesUtilisateur", PreferencesUtilisateurSchema, "preferences_utilisateur");


module.exports = {
    PreferencesUtilisateurModel
}
