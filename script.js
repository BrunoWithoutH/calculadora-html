function insert(num) {
    var resultado = document.getElementById('resultado').innerHTML;
    if (isOperator(num) && isOperator(resultado.slice(-1))) {
        document.getElementById('resultado').innerHTML = resultado.slice(0, -1) + num;
    } else {
        document.getElementById('resultado').innerHTML = resultado + num;
    }
}

function isOperator(char) {
    return ['×', '-', '÷', '+', '.'].includes(char);
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function insert(char) {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado.length < 11 || isOperator(char)) {
        if (resultado.length < 11 || isOperator(char)) {
            document.getElementById('resultado').innerHTML += char;
        }
    }
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        resultado = resultado.replace(/×/g, '*');
        resultado = resultado.replace(/÷/g, '/');
        resultado = resultado.replace(/,/g, '.');
        var finalResult = eval(resultado).toString();
        if (finalResult.length > 11) {
            finalResult = Number(finalResult).toExponential(6); // Ajuste o número de casas decimais conforme necessário
        }
        document.getElementById('resultado').innerHTML = finalResult;
    } else {
        document.getElementById('resultado').innerHTML = "Erro";
    }
}

var operatorMapping = {
    '*': '×',
    '-': '-',
    '/': '÷',
    '+': '+',
    '.': '.'
};

document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (key >= '0' && key <= '9') {
        insert(key);
    } else if (operatorMapping[key]) {
        insert(operatorMapping[key]);
    } else if (key === 'Enter') {
        calcular();
    } else if (key === 'Backspace') {
        back();
    } else if (key === 'c' || key === 'C' || key === 'Escape' || key === 'Delete') {
        clean();
    }
});