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

function clearDisplay() {
    display.value = '';
}

function calculate() {
    secondNumber = display.value;
    let result = '';
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;

        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;

        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;

        case '/':
            if (parseFloat(secondNumber) === 0) {
                result = 'Error: Division by Zero';
            } else {
                result = parseFloat(firstNumber) / parseFloat
            }
    }
}