const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pagamento = new Schema({
	forma_de_pagamento: String,
	valor: Number,
	moeda: String,
	descricao: String

});

module.exports = pagamento;

