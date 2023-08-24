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

document.addEventListener('keydown', (event) => {
    removeDecimalPoint();
    let key = event.code;
    console.log(key);
    switch (key) {
        case 'Numpad1':
        case 'Digit1':
            firstNum += '1';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad2':
        case 'Digit2':
            firstNum += '2';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad3':
        case 'Digit3':
            firstNum += '3';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad4':
        case 'Digit4':
            firstNum += '4';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad5':
        case 'Digit5':
            firstNum += '5';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad6':
        case 'Digit6':
            firstNum += '6';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad7':
        case 'Digit7':
            firstNum += '7';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad8':
        case 'Digit8':
            firstNum += '8';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad9':
        case 'Digit9':
            firstNum += '9';
            calculatorScreen.textContent = firstNum;
            break;
        case 'Numpad0':
        case 'Digit1':
            firstNum += '0';
            calculatorScreen.textContent = firstNum;
            break;
        case 'NumpadDecimal':
        case 'Period':
            firstNum += '.';
            calculatorScreen.textContent = firstNum;
            removeDecimalPoint();
            break;
        case 'NumpadAdd':
            evaluate();
            secondNum = firstNum;
            firstNum = '';
            operator = '+';
            calculatorScreen.textContent = operator;
            break;
        case 'NumpadSubtract':
            evaluate();
            secondNum = firstNum;
            firstNum = '';
            operator = '-';
            calculatorScreen.textContent = operator;
            break;
        case 'NumpadMultiply':
            evaluate();
            secondNum = firstNum;
            firstNum = '';
            operator = '*';
            calculatorScreen.textContent = operator;
            break;
        case 'NumpadDivide':
            firstNum = calculatorScreen.textContent;
            evaluate();
            secondNum = firstNum;
            firstNum = '';
            operator = '/';
            calculatorScreen.textContent = operator;
            break;
        case 'NumpadEnter':
        case 'Equal':
            operate();
            break;
        case 'Backspace':
            undo();
            break;
    }
    event.preventDefault();
});

/* to do:  
 - keyboard support
 - refactor if you can
*/
