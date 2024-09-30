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
    if (resultado.length < 20 || isOperator(char)) { //só pra não ter dúvida
        if (resultado.length < 20 || isOperator(char)) {
            if (resultado.length < 20 || isOperator(char)) {
                if (resultado.length < 20 || isOperator(char)) {
                    if (resultado.length < 20 || isOperator(char)) {
                        if (resultado.length < 20 || isOperator(char)) {
                            if (resultado.length < 20 || isOperator(char)) {
                                if (resultado.length < 20 || isOperator(char)) {
                                    if (resultado.length < 20 || isOperator(char)) {
                                        if (resultado.length < 20 || isOperator(char)) {
                                            if (resultado.length < 20 || isOperator(char)) {
                                                if (resultado.length < 20 || isOperator(char)) {
                                                    document.getElementById('resultado').innerHTML += char;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
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
        if (finalResult.length > 20) {
            finalResult = Number(finalResult).toExponential(6);
        }
        document.getElementById('resultado').innerHTML = finalResult;
        if (finalResult.includes('.')) {
            document.getElementById('resultado').innerHTML = finalResult.replace('.', ',');
        }
    } else if (finalResult === 'Infinity') {
        document.getElementById('resultado').innerHTML = "Infinito";
    } else {
        document.getElementById('resultado').innerHTML = "Erro";
    }
}

var operatorMapping = {
    '*': '×',
    '-': '-',
    '/': '÷',
    '+': '+',
};

var commadotMapping = {
    ',': ',',
    '.': ','
};

document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (key >= '0' && key <= '9') {
        insert(key);
    } else if (commadotMapping[key]) {
        insert(commadotMapping[key]);
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