function add(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
}

function divide(a, b) {
    if (b === '0') {
        return 'Null'
    }
    return parseFloat(a) / parseFloat(b)
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
};


function operate(a, operator, b) {
    let result = ''
    if (operator === '+') {
        return add(a, b)
    } else if (operator === '-') {
        return subtract(a, b)
    } else if (operator === 'x') {
        return multiply(a, b)
    } else if (operator === '/') {
        return divide(a, b)
    }
    return result
}

let firstValue = '';
let secondValue = '';
let currentOp = '';

/*=====Consts=====*/
//const calculator = document.querySelector('.calculator')
const display = document.querySelector('.screen')
const numberKeys = document.querySelectorAll('[data-number]')
const operatorKeys = document.querySelectorAll('[data-operator]')
const equalButton = document.querySelector('#equalBtn');
const pointButton = document.querySelector('#pointBtn');
const delBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.ac');



numberKeys.forEach((button) =>
    button.addEventListener('click', () => appEndValue(button.textContent))
);

operatorKeys.forEach((button) =>
    button.addEventListener('click', () => operator(button.textContent))
);

equalButton.addEventListener('click', () => evaluate())
pointButton.addEventListener('click', () => decimal())
delBtn.addEventListener('click', () => del())
clearBtn.addEventListener('click', () => clear())


function appEndValue(number) {
    if (display.textContent === '0') {
        display.textContent = number
    } else {
        display.textContent += number
    }

    if (equalButton.className.includes('pressed')) {
        display.textContent = number
        Array.from(equalButton.parentNode.children).forEach(k => k.classList.remove('pressed'));
    }

    console.log(number)
}

function decimal() {
    pointButton.classList.add('pressed')
    if (display.textContent.includes('.'))return
    if (display.textContent === '0') {
        display.textContent = display.textContent + "."
    } else {
        display.textContent = display.textContent + '.'
    }

    console.log('.')
    
}


function operator(operator) {
    firstValue = display.textContent
    currentOp = operator

    if (display.textContent !== '0') {
        display.textContent = '0'
    }
    console.log(currentOp)
}

function evaluate() {
    secondValue = display.textContent
    equalButton.classList.add('pressed')
    display.textContent = operate(firstValue, currentOp, secondValue);
}

function del() {
    display.textContent = display.textContent.toString().slice(0, -1)
}

function clear() {
    display.textContent = '0'
    firstValue = ''
    secondValue = ''
    currentOp = ''
}