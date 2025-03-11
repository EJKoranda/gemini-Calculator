/* script.js */
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        switch (buttonText) {
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                    console.error("Calculator Error:", error);
                }
                break;
            case 'C':
                display.value = '';
                break;
            case 'CE':
                display.value = display.value.slice(0, -1);
                break;
            default:
                display.value += buttonText;
        }
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        display.value += key;
    } else if (['+', '-', '*', '/'].includes(key)) {
        display.value += key;
    } else if (key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        display.value = '';
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});