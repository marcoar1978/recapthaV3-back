const mongoose = require('mongoose');

module.exports = () => {
    global.db = mongoose.connect('mongodb://localhost:27017/produtos',  { useNewUrlParser: true });
   console.log(global.db);

    mongoose.connection.on('connected', function () {
        console.log('=====Conexão estabelecida com sucesso=====');
       });
       mongoose.connection.on('error', function (err) {
        console.log('=====Ocorreu um erro: ' + err);
       });
       mongoose.connection.on('disconnected', function () {
        console.log('=====Conexão finalizada=====');
       }); 




    }

