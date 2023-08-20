import * as operations from './operations.js';

let firstNum = '';
let operator;
let secondNum;

const returnByOneDecimal = (value) => (value % 1 == 0 ? value : Math.round(value * 10) / 10);

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            firstNum = returnByOneDecimal(operations.add(a, b));
            break;
        case '-':
            firstNum = returnByOneDecimal(operations.subtract(a, b));
            break;
        case '*':
            firstNum = returnByOneDecimal(operations.multiply(a, b));
            break;
        case '/':
            if (b === 0) {
                console.log('you cant divide by 0');
                break;
            } else {
                firstNum = returnByOneDecimal(operations.divide(a, b));
                break;
            }
    }
}

const digits = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.text');

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        firstNum += digit.textContent;
        calculatorScreen.textContent = firstNum;
    });

    console.log(firstNum);
});

/* to do:  
 - dont let the users input  >1 decimal num

 - backspace button/undo
 - keyboard support
*/
