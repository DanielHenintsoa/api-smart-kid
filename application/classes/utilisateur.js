const util = require("../librairies/util.js");
const UserModel = require('../models/userModel.js');
const sha1 = require('sha1');

class Utilisateur {
    _id;
    _email;
    _mdp;
    _pseudo;
    _mode;

    constructor() {}

    set mode(value){
        this._mode = value;
    }

    get mode(){
        return this._mode;
    }

    set email(value){
        if(this._mode === "modif"){
            if(util.estTextVide(value)){
                throw 'Email vide.';
            }
            if(!util.validerMail(value)){
                throw 'Email non valide.';
            }
        }
        this._email = value;
    }

    get email(){
        return this._email;
    }

    set pseudo(value){
        if(this._mode === "modif"){
            if(util.estTextVide(value)){
                throw 'Pseudo vide.';
            }
        }
        this._pseudo = value;
    }

    get pseudo(){
        return this._pseudo;
    }

    set mdp(value){
        if(this._mode === "modif"){
            if(util.estTextVide(value)){
                throw 'Mot de passe vide.';
            }
        }
        this._mdp = value;
    }

    get mdp(){
        return this._mdp;
    }

    set confirmMdp(value){
        if(this._mdp != value){
            if(util.estTextVide(value)){
                throw 'Erreur sur la confirmation du mot de passe.';
            }
        }
    }

    async insert(){
        const user = await UserModel.findOne({
            email : this._email
        });
        if(user){
            throw 'Email déjà utilisée.';
        }

        const newUser = new UserModel({
            email: this._email,
            mdp: sha1(this._mdp),
            pseudo: this._pseudo
        });

        return await newUser.save().then().catch(err => { throw err });
    }
}

module.exports = Utilisateur;