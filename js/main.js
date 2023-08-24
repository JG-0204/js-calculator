import * as operations from './operations.js';

let firstNum = '';
let operator = '';
let secondNum = '';

const returnByOneDecimal = (value) => (value % 1 == 0 ? value : Math.round(value * 10) / 10);

function operate() {
    let num1 = parseFloat(secondNum);
    let num2 = parseFloat(firstNum);

    switch (operator) {
        case '+':
            firstNum = returnByOneDecimal(operations.add(num1, num2));
            calculatorScreen.textContent = firstNum;
            break;
        case '-':
            firstNum = returnByOneDecimal(operations.subtract(num1, num2));
            calculatorScreen.textContent = firstNum;
            break;
        case '*':
            firstNum = returnByOneDecimal(operations.multiply(num1, num2));
            calculatorScreen.textContent = firstNum;
            break;
        case '/':
            if (num2 === 0) {
                calculatorScreen.textContent = 'Math Error';
                firstNum = '';
                break;
            } else {
                firstNum = returnByOneDecimal(operations.divide(num1, num2));
                calculatorScreen.textContent = firstNum;
                break;
            }
    }

    secondNum = '';
    operator = '';
    removeDecimalPoint();
}

const digits = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.text');
const decimalPoint = document.getElementById('dot');

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (digit == decimalPoint) {
            firstNum += digit.textContent;
            calculatorScreen.textContent = firstNum;
            removeDecimalPoint();
        } else {
            removeDecimalPoint();
            firstNum += digit.textContent;
            calculatorScreen.textContent = firstNum;
        }
    });
});

const operators = document.querySelectorAll('.operator');

operators.forEach((symbol) => {
    symbol.addEventListener('click', () => {
        evaluate();
        secondNum = firstNum;
        firstNum = '';
        operator = symbol.textContent;
        calculatorScreen.textContent = operator;
    });
});

function evaluate() {
    if (secondNum !== '' && operator !== '') {
        operate();
    }
}

const equalKey = document.getElementById('equal');

equalKey.addEventListener('click', operate);

const clearKey = document.getElementById('clear');

function clear() {
    if (firstNum == '') {
        return 0;
    }
    firstNum = '';
    operator = '';
    secondNum = '';
    calculatorScreen.textContent = '';
}

clearKey.addEventListener('click', clear);

const removeDecimalPoint = () =>
    calculatorScreen.textContent.includes('.')
        ? (decimalPoint.disabled = true)
        : (decimalPoint.disabled = false);

const undoKey = document.getElementById('undo');

function undo() {
    firstNum = firstNum.slice(0, -1);
    calculatorScreen.textContent = firstNum;
}

undoKey.addEventListener('click', undo);

/* to do:  
 - backspace button/undo
 - keyboard support
 - refactor if you can
*/
