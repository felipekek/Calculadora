// calculadora.js
function doOperador(op, v1, v2){

    if(op == "+") return v1 + v2;

    if(op== "-") return v1 - v2;

    if(op== "x") return v1 * v2;

    if(op == "/") return v1 / v2;

    throw new Error("Operação Inválida");


}

module.exports = { doOperador };