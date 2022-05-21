const model = require('../models/video_categorieModel');

/**
 * video_categorieController.js
 *
 * @description :: Server-side logic for managing video.
 */
module.exports = {

    /**
     * video_categorieController.getVideoCategorie()
     */
    getVideoCategorie: (req, res) => {
        const id = req.params.idCategorie;
        model.VideoCategorieModel
            .find({idCategorie: id})
            .populate("idCategorie")
            .exec((err, videoCategorie) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Erreur du serveur lors de la recuperation des données',
                        error: err
                    });
                }
    
                if(!videoCategorie) {
                    return res.status(404).json({
                        message: 'Vide'
                    });
                }
                return res.json(videoCategorie);
            })
    },
};
