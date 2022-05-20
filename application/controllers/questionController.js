var { QuestionModel, QuestionCategorieModel, QuestionJoueursModel, QuestionFiniModel} = require('../models/questionModel.js');

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

    terminerQuestion : async function (req, res) {
        const {idQuestion, idUser} = req.body;
        try {
            const fini = await QuestionFiniModel.findOne({
                idQuestion : idQuestion,
                idUser : idUser
            });
    
            if(fini){
                res.json(fini);
            } else {
                const newFini = new QuestionFiniModel({
                    idQuestion : idQuestion,
                    idUser : idUser
                });
                res.json(await newFini.save().then().catch(err => { throw err }));
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
};
