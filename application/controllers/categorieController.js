var CategorieModel = require('../models/categorieModel.js');

/**
 * categorieController.js
 *
 * @description :: Server-side logic for managing categories.
 */
module.exports = {

    /**
     * categorieController.list()
     */
    list: function (req, res) {
        CategorieModel.find(function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categorie.',
                    error: err
                });
            }

            return res.json(categories);
        });
    },

    /**
     * categorieController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        CategorieModel.findOne({_id: id}, function (err, categorie) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categorie.',
                    error: err
                });
            }

            if (!categorie) {
                return res.status(404).json({
                    message: 'Categorie non trouvée.'
                });
            }

            return res.json(categorie);
        });
    },

    /**
     * categorieController.create()
     */
    create: function (req, res) {
        var categorie = new CategorieModel({
			libelle : req.body.libelle,
			image : req.body.image
        });

        categorie.save(function (err, categorie) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating categorie',
                    error: err
                });
            }

            return res.status(201).json(categorie);
        });
    },

    /**
     * categorieController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        CategorieModel.findOne({_id: id}, function (err, categorie) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categorie',
                    error: err
                });
            }

            if (!categorie) {
                return res.status(404).json({
                    message: 'No such categorie'
                });
            }

            categorie.libelle = req.body.libelle ? req.body.libelle : categorie.libelle;
			categorie.image = req.body.image ? req.body.image : categorie.image;
			
            categorie.save(function (err, categorie) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating categorie.',
                        error: err
                    });
                }

                return res.json(categorie);
            });
        });
    },

    /**
     * categorieController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        CategorieModel.findByIdAndRemove(id, function (err, categorie) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the categorie.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
