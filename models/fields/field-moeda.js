function toUpper(v){
    return v.toUpperCase();
}

function toLower(v){
    return v.toLowerCase();
}


module.exports = {type: String, require: 'A moeda é obrigatória', get: toLower, set: toUpper};
