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

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.textContent === '0') return;
        if (display.textContent.endsWith('+')) return
        else if (display.textContent.endsWith('-')) return;
        else if (display.textContent.endsWith('*')) return;
        else if (display.textContent.endsWith('÷')) return;
        if (display.textContent.includes('+') ||
            display.textContent.includes('-') ||
            display.textContent.includes('*') ||
            display.textContent.includes('/')) { return; }
        let displayValue = btn.dataset.operator;
        if (display.textContent === '0') {
            display.textContent = displayValue;
        } else {
            display.textContent += displayValue;
        }
    });
});

function calculate(){
    equalsButton.addEventListener('click', () => {
        operator = display.textContent.includes('+') ? '+' :
                   display.textContent.includes('-') ? '-' :
                   display.textContent.includes('*') ? '*' :
                   display.textContent.includes('/') ? '/' : '';
        number1 = display.textContent.split(operator)[0];
        number2 = display.textContent.split(operator)[1];
        switch (operator) {
            case '+':
                result = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                result = parseFloat(number1) - parseFloat(number2);
                break;
            case '*':
                result = parseFloat(number1) * parseFloat(number2);
                break;
            case '/':
                if (number2 == 0){
                    result = 'Erreur';
                } else {
                    result = parseFloat(number1) / parseFloat(number2);
                }
                break;
        }
    display.textContent = result;
})
}

function keyboardMapping() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            equalsButton.click();
        }
        if (event.key === 'Escape') {
            buttonClear.click();
        }
        numberButtons.forEach(btn => {
            if (event.key === btn.dataset.number) {
                btn.click();
            }
        });
        operatorButtons.forEach(btn => {
            if (event.key === btn.dataset.operator) {
                btn.click();
            }
        });
    });
}

calculate();
keyboardMapping();
