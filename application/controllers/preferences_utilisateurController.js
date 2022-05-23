const model = require('../models/preferences_utilisateurModel');

/**
 * preferences_utilisateurController.js
 *
 * @description :: Server-side logic for managing video.
 */
module.exports = {

    /**
     * preferences_utilisateurController.getPreferencesUtilisateur()
     */
    getPreferencesUtilisateur: (req, res) => {
        const id = req.params.idUser;
        model.PreferencesUtilisateurModel
            .findOne({idUtilisateur: id})
            .exec((err, preference) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Erreur du serveur lors de la recuperation des données',
                        error: err
                    });
                }
    
                if(!preference) {
                    return res.status(404).json({
                        message: 'Vide'
                    });
                }
                return res.json(preference);
            })
    },
};
