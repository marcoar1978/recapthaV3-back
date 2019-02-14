const mongoose = require('mongoose');
const schema = mongoose.Schema({
    produto: {type:String},
    preco: {type:String}

});

mongoose.model("produto", schema);