const mongoose = require('mongoose');
require('../model/produto');
const model = mongoose.model('produto');
const request = require('request');

// const Recaptcha = require('express-recaptcha').Recaptcha;
const Recaptcha = require('express-recaptcha').Recaptcha;

const recaptcha = new Recaptcha('6LftCZEUAAAAAGMpTzqFZZXkf3IXMuK8rpIM1Jyx', '6LftCZEUAAAAAHIZjV8o9qqQGXzW4FH6U0eP4rwR', {callback:'cb'});


module.exports = (app) => {

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});    

app.post('/enviaTokenGoogle',  function(req,res){
    //let jsonGoogle = [];
    
    request(`https://www.google.com/recaptcha/api/siteverify?secret=6LftCZEUAAAAAHIZjV8o9qqQGXzW4FH6U0eP4rwR&response=${req.body['g-recaptcha-response']}`, { json: true }, (err, res1, body) => {
    if (err) { return console.log(err); }
        console.log(body);
        res.json(body);
         });
   });




















app.get('/', function(req, res){
    
    res.send('Hello World');
})

app.get('/produtos', function(req, res){
   model.find({}, (err, produtos) =>{ res.json(produtos); })
    
});

app.post('/recebeProdutos', function(req,res){
    console.log(req.body);
    
    model.create(req.body);
    res.send(req.body);
});



}
