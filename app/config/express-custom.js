const app = require("express")();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

require('../routes/rotas')(app);

module.exports = app;