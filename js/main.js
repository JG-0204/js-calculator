import * as operations from './operations.js';

// parseInt(prompt('first num: '))

let firstNum = 56.9;
let operator = '+';
let secondNum = 34.1231231231232123123123;

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

operate(firstNum, operator, secondNum);
console.log(firstNum);
