function insert(num) {
    var resultado = document.getElementById('resultado').innerHTML;
    if (isOperator(num) && isOperator(resultado.slice(-1))) {
        document.getElementById('resultado').innerHTML = resultado.slice(0, -1) + num;
    } else {
        document.getElementById('resultado').innerHTML = resultado + num;
    }
}

function isOperator(char) {
    return ['×', '-', '÷', '+'].includes(char);
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        resultado = resultado.replace(/×/g, '*');
        resultado = resultado.replace(/÷/g, '/');
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Erro"
    }
}
var operatorMapping = {
    '*': '×',
    '/': '÷',
    '+': '+',
    '-': '-'
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
    } else if (key === 'c' || key === 'C') {
        clean();
    }
});