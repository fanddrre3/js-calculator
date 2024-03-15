let firstNumber = '';
let operator = '';
let secondNumber = '';

const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function setOperator(op) {
    firstNumber = display.value;
    operator = op;
    display.value = '';
}