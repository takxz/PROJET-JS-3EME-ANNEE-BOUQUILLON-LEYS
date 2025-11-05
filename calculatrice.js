const buttonClear = document.querySelector('.clear');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('.equals');
const display = document.getElementById('display');

let number1 = "";
let number2 = "";
let operator = "";
let result = "";

function updateDisplay(){
    
}

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const displayValue = btn.dataset.number;
        if (display.textContent === '0') {
            display.textContent = displayValue;
        } else {
            display.textContent += displayValue;
        }
    });
});

buttonClear.addEventListener('click', () => {
    display.textContent = '0';
    number1 = "";
    number2 = "";
    operator = "";
    result = "";
});

