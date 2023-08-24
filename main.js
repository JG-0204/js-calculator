const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let currentNum = '';
let operator = '';
let previousNum = '';
let startNewInput = false;

const digits = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.text');
const operators = document.querySelectorAll('.operator');
const decimalPoint = document.getElementById('dot');

const equalKey = document.getElementById('equal');
const clearKey = document.getElementById('clear');
const undoKey = document.getElementById('undo');

function operate() {
    let num1 = parseFloat(previousNum);
    let num2 = parseFloat(currentNum);

    switch (operator) {
        case '+':
            calculate(add, num1, num2);
            break;
        case '-':
            calculate(subtract, num1, num2);
            break;
        case '*':
            calculate(multiply, num1, num2);
            break;
        case '/':
            calculate(divide, num1, num2);
            break;
    }
    previousNum = '';
    operator = '';
    removeDecimalPoint();
}

function calculate(operation, a, b) {
    if (operator == '/' && b == 0) {
        currentNum = '';
        calculatorScreen.textContent = 'Math Error';
    } else {
        currentNum = returnByOneDecimal(operation(a, b)).toString();
        calculatorScreen.textContent = currentNum;
    }
}

const returnByOneDecimal = (value) => (value % 1 == 0 ? value : Math.round(value * 10) / 10);

function removeDecimalPoint() {
    calculatorScreen.textContent.includes('.')
        ? (decimalPoint.disabled = true)
        : (decimalPoint.disabled = false);
}

function addDigit(value) {
    currentNum += value;
    calculatorScreen.textContent = currentNum;
}

function addOperator(value) {
    previousNum = currentNum;
    currentNum = '';
    operator = value;
    calculatorScreen.textContent = operator;
}

function eventListen() {
    digits.forEach((digit) => {
        digit.addEventListener('click', () => {
            if (startNewInput) {
                currentNum = '';
                startNewInput = false;
            }
            addDigit(digit.textContent);
            removeDecimalPoint();
        });
    });

    operators.forEach((symbol) => {
        symbol.addEventListener('click', () => {
            evaluate();
            addOperator(symbol.textContent);
        });
    });

    // keyboard supp (numpad)
    document.addEventListener('keydown', (event) => {
        removeDecimalPoint();
        let key = event.code;
        switch (key) {
            case 'Numpad1':
                addDigit('1');
                break;
            case 'Numpad2':
                addDigit('2');
                break;
            case 'Numpad3':
                addDigit('3');
                break;
            case 'Numpad4':
                addDigit('4');
                break;
            case 'Numpad5':
                addDigit('5');
                break;
            case 'Numpad6':
                addDigit('6');
                break;
            case 'Numpad7':
                addDigit('7');
                break;
            case 'Numpad8':
                addDigit('8');
                break;
            case 'Numpad9':
                addDigit('9');
                break;
            case 'Numpad0':
                addDigit('0');
                break;
            case 'NumpadDecimal':
                addDigit('.');
                removeDecimalPoint();
                break;
            case 'NumpadAdd':
                evaluate();
                addOperator('+');
                break;
            case 'NumpadSubtract':
                evaluate();
                addOperator('-');
                break;
            case 'NumpadMultiply':
                evaluate();
                addOperator('*');
                break;
            case 'NumpadDivide':
                evaluate();
                addOperator('/');
                break;
            case 'NumpadEnter':
                evaluate();
                break;
            case 'Backspace':
                undo();
                break;
        }
        event.preventDefault();
    });
}

function evaluate() {
    if (previousNum !== '' && operator !== '') {
        operate();
        startNewInput = true;
    }
}

equalKey.addEventListener('click', evaluate);

clearKey.addEventListener('click', () => {
    currentNum = '';
    operator = '';
    previousNum = '';
    calculatorScreen.textContent = '';
});

undoKey.addEventListener('click', () => {
    currentNum = currentNum.slice(0, -1);
    calculatorScreen.textContent = currentNum;
});

eventListen();
