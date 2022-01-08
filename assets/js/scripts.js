var currentNumberWraper = document.getElementById('currentNumber');
var currentNumber = 0;
var reset = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWraper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWraper.innerHTML = currentNumber;
}

function resetar() {
    currentNumber = currentNumber - currentNumber;
    currentNumberWraper.innerHTML = currentNumber;
}