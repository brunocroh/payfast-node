var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var pagamento = require('../models/pagamento.js');

const PagamentoModel = mongoose.model('Pagamento',pagamento);

module.exports = function(app){

	app.get('/pagamentos', function(req, res){

		PagamentoModel.find({},function(err, data){
			if(err) return console.log('[ERRO] ' + err);
			return res.send(data);
		});
	});

	app.get('/pagamentos/:id', function(req, res){
		query = {_id: new ObjectId(req.params.id)};

		PagamentoModel.find(query,function(err, data){
			if(err) return console.log('[ERRO] ' + err);
			return res.send(data);
		});
	});

	app.post('/pagamentos/pagamento',function(req,res){
		const pagamento = new PagamentoModel(req.body);

		pagamento.save(function(err, data){
			if(err) return console.log('[ERRO] ' + err);
			return res.send(data);
		});
	});


}
