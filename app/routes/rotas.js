const mongoose = require('mongoose');
require('../model/produto');
const middle = require('../api/middleware');
const model = mongoose.model('produto');


module.exports = (app) => {

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.post('/enviaTokenGoogle', middle.verifTokenGoogle,  function(req,res){
       let score = {"score" : 0.9}
       
       res.json(score);

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
