const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

let firstNum = 0;
let operator;
let secondNum;

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            firstNum = operations.add(a, b);
            break;
        case '-':
            firstNum = operations.subtract(a, b);
            break;
        case '*':
            firstNum = operations.multiply(a, b);
            break;
        case '/':
            if (b === 0) {
                console.log('you cant divide by 0');
                break;
            } else {
                firstNum = operations.divide(a, b);
                break;
            }
    }
}
