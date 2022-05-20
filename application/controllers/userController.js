const UserModel = require('../models/userModel.js');
const Utilisateur = require('../classes/utilisateur.js');
const sha1 = require('sha1');
/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {
    
    login: async function (req, res) {
        const {email, mdp} = req.body;
        try {
            const user = await UserModel.findOne({
                email : email,
                mdp : sha1(mdp)
            });
            if(!user){
                res.status(500).send({
                    message : "Erreur d'authentification !"
                });
            } else {
                res.json(user);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    inscription: async function (req, res) {
        const {pseudo, email, mdp, confirmMdp} = req.body;
        try {
            const user = new Utilisateur();
                user.mode = "modif";
                user.pseudo = pseudo;
                user.email = email;
                user.mdp = mdp;
                user.confirmMdp = confirmMdp;

                user.insert().then(response => {
                    res.json(response);
                }).catch(error => {
                    console.log(error);
                    res.status(500).send(error);
                });
        } catch (error) {
            res.status(500).send(error);
        }
    }
};
