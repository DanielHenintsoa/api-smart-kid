var mongoose = require('mongoose');
require("./categorieModel")

const VideoCategorieSchema = new mongoose.Schema({
	titre: {
		type: String,
		required:true
	},
	duration: {
		type: String,
		required:true
	},
	thumbnail: {
		type: String,
		required:false
	},
	video: {
		type: String,
		required: true
	},
    auteur: {
        type:String,
        required:true
    },
    idCategorie: {
        type: mongoose.Schema.Types.ObjectId,
		ref:"categorie",
		required:true
    }
});
  
const VideoCategorieModel = mongoose.model("videoCategorie", VideoCategorieSchema, "video_categorie");


module.exports = {
    VideoCategorieModel
}
