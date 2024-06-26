document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let memory = 0;

    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                display.value = '';
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else if (value === 'M+') {
                memory += parseFloat(display.value);
                display.value = '';
            } else if (value === 'M-') {
                memory -= parseFloat(display.value);
                display.value = '';
            } else if (value === 'MR') {
                display.value = memory;
            } else if (value === 'MC') {
                memory = 0;
                display.value = '';
            } else {
                display.value += value;
            }
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if ((key >= 0 && key <= 9) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            display.value += key;
        } else if (key === 'Enter') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape') {
            display.value = '';
        }
    });
});
