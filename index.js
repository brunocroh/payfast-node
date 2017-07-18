var app = require('./config/custom-express')();
var mongoose = require('./config/mongoose.js');

app.listen(3000,function(){
    console.log('Servidor rodando na porta 3000');
});

