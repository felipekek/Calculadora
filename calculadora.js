// calculadora.js

function doOperador(operador, v1, v2) {
    switch(operador) {
        case "+": return v1 + v2;
        case "-": return v1 - v2;
        case "x": return v1 * v2;
        case "/": 
            if (v2 === 0) throw new Error("Erro: divisão por zero");
            return v1 / v2;
        default: throw new Error("Operação Inválida");
    }
}

// outras funções que você tem
function executarCalculo(a, b, op) {
    try {
        return doOperador(op, a, b);
    } catch (e) {
        return e.message;
    }
}

function trollarCalculo(a, b, op, callback) {
    const resultado = doOperador(op, a, b);
    setTimeout(() => callback("Resultado: Hello World 😎"), 1000);
    setTimeout(() => callback("Resultado: Brincadeira 😅"), 2000);
    setTimeout(() => callback(`Resultado: ${resultado}`), 3000);
}

// **exportando as funções**
module.exports = { doOperador, executarCalculo, trollarCalculo };
