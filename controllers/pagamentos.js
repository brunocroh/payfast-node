var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var pagamento = require('../models/pagamento.js');

const PagamentoModel = mongoose.model('Pagamento',pagamento);

module.exports = function(app){

    app.get('/pagamentos', function(req, res){
        const query = {};

        PagamentoModel.find(query,function(err,pagamentos){
            res.json(pagamentos);
        });
    });

    app.get('/pagamentos/:id', function(req, res){
        const query = {_id: new ObjectId(req.params.id)};

        PagamentoModel.findOne(query,function(err,pagamento){
            res.json(pagamento);
        });
    });

    app.post('/pagamentos/pagamento',function(req,res){
        const pagamento = new PagamentoModel(req.body);

        console.log("valor em dolares : ", pagamento.valorDolar);

        pagamento.save(function(err){
            if(err){
                console.log("Falha ao salvar.");
                res.status(400).send("Falha ao salvar o pagamento.");
                return;
            }
            res.json(pagamento);
            return;
        });
    });


    app.delete('/pagamentos/delete/all',function(req,res){
        const pagamento = new PagamentoModel({});

        pagamento.remove({}, function(err){
            if(err){
                console.log('[ERRO] Falha ao remover todos os pagamentos');
                res.status(400).send({erro: "Falha ao remover todos os pagamentos"});
                return;
            }

            res.send({info:"Todos os pagamentos foram removidos"});
            return;
        });
    });
};
