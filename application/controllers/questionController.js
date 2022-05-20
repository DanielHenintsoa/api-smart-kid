var { QuestionModel, QuestionCategorieModel, QuestionJoueursModel} = require('../models/questionModel.js');

/**
 * questionController.js
 *
 * @description :: Server-side logic for managing questions.
 */
module.exports = {

    /**
     * questionController.list()
     */
    list: function (req, res) {
        const {user, categ} = req.params;
        
        QuestionJoueursModel.find({idCategorie : categ}, async function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }
            let questionFini = [];
            let questionNonFini = [];
            
            await questions.map(quest => {
                const listeJoueursFini = quest["joueurs"];
                if(!!listeJoueursFini && listeJoueursFini.length > 0){
                    for(let i = 0; i < listeJoueursFini.length; i++){
                        if(listeJoueursFini[i].idUser == user){
                            questionFini.push(quest);
                            break;
                        } else if(i == listeJoueursFini.length - 1){
                            questionNonFini.push(quest);
                        }
                    }
                } else {
                    questionNonFini.push(quest);
                }
                
            });

            let listeQuestion = [];
                listeQuestion.push(...questionNonFini);
                listeQuestion.push(...questionFini);
            
            return res.json(listeQuestion);
        });
    },

    /**
     * questionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        QuestionModel.findOne({_id: id}, function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            if (!question) {
                return res.status(404).json({
                    message: 'No such question'
                });
            }

            return res.json(question);
        });
    },

    /**
     * questionController.create()
     */
    create: function (req, res) {
        var question = new QuestionModel({
			question : req.body.question,
			idCategorie : req.body.idCategorie,
			reponse : req.body.reponse,
			options : req.body.options,
			audio : req.body.audio,
			image : req.body.image
        });

        question.save(function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating question',
                    error: err
                });
            }

            return res.status(201).json(question);
        });
    },

    /**
     * questionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        QuestionModel.findOne({_id: id}, function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question',
                    error: err
                });
            }

            if (!question) {
                return res.status(404).json({
                    message: 'No such question'
                });
            }

            question.question = req.body.question ? req.body.question : question.question;
			question.idCategorie = req.body.idCategorie ? req.body.idCategorie : question.idCategorie;
			question.reponse = req.body.reponse ? req.body.reponse : question.reponse;
			question.options = req.body.options ? req.body.options : question.options;
			question.audio = req.body.audio ? req.body.audio : question.audio;
			question.image = req.body.image ? req.body.image : question.image;
			
            question.save(function (err, question) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating question.',
                        error: err
                    });
                }

                return res.json(question);
            });
        });
    },

    /**
     * questionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        QuestionModel.findByIdAndRemove(id, function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the question.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
