
function validaEmail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email); 
    }

module.exports =  validaEmail;