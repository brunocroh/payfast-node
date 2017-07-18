const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const forma_de_pagamento = require('./fields/field-forma-de-pagamento');
const valor = require('./fields/field-valor');
const moeda = require('./fields/field-moeda');
const status = require('./fields/field-status');
const data = require('./fields/field-data');
const descricao = require('./fields/field-descricao');

const _schema = {
    forma_de_pagamento,
    valor,
    moeda,
    status,
    data,
    descricao
};

module.exports = new Schema(_schema);

