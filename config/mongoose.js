const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/payfast';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
	console.log('[INFO] Conexão padrão do mongoose aberta no banco: '+ dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('[ERRO] Conexão padrão do mongoose erro: ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('[INFO] Conexão padrão do mongoose desconectada: ' + dbURI);
});

mongoose.connection.on('open', function(){
	console.log('[INFO] Conexão padrão do mongoose aberta');
});

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('[INFO] Conexão padrão do mongoose desconectada, app encerrado.');
		process.exit(0);
	})
})
