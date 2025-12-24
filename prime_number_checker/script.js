const inputVal = document.getElementById('numberInput');
const result = document.getElementById('result');


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputVal = document.getElementById('numberInput').value;
    if (isPrime(inputVal)) {
        result.textContent = `${inputVal} is a Prime Number.`;
        result.style.color = 'green';
        result.style.margin = '10px 0';
      } else {
        result.textContent = `${inputVal} is Non-Prime number.`;
        result.style.color = 'blue';
        result.style.margin = '10px 0';
    } 
});

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
