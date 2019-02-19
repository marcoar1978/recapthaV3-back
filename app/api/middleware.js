const request = require('request');

var api = {};

//Teste Branch dev
//Teste Branch dev 2

api.verifTokenGoogle = function(req, res, next) {
    request(`https://www.google.com/recaptcha/api/siteverify?secret=6LftCZEUAAAAAHIZjV8o9qqQGXzW4FH6U0eP4rwR&response=${req.body['g-recaptcha-response']}`, { json: true }, (err, res1, body) => {
    if (err) { return console.log(err); }
        if(body.score > 0.5){
            console.log(body.score);
            next();
            }
        else{
            console.log('Middleware não permitiu continuação');

            }    
    
    });
}

//Teste Branch

module.exports = api;