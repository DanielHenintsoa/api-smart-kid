const util = {
    estTextVide : function(str){
        if(str == undefined || str == null){
            return true;
        }
		var strRE = new RegExp();
		strRE.compile('^[\s ]*$','gi');
		return strRE.test(str);
    },

    validerRegex: function(regExpression,val){
		var regEX = new RegExp(regExpression);
	
		if(regEX.test(val)){
		   return true; 
		} else {
			return false;
		}
    },

    validerMail(mail){
        return this.validerRegex("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,17}$", mail);
    }
};

module.exports = util;