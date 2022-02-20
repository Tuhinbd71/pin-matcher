function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const clacValue = document.getElementById('show-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            clacValue.value = '';
        }
    }
    else {
        const previousCalcValue = clacValue.value;
        const newCalcValue = previousCalcValue + number;
        clacValue.value = newCalcValue;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const showNumber = document.getElementById('show-numbers').value;
    const notifySeccess = document.getElementById('notify-success');
    const notifyError = document.getElementById('notify-error');
    if (pin == showNumber) {

        notifySeccess.style.display = 'block';
        notifyError.style.display = 'none';
    }
    else {
        notifySeccess.style.display = 'none';
        notifyError.style.display = 'block';
    }
}


