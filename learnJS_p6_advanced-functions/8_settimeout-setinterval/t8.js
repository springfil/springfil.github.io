// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);
    current === to ? clearInterval(timerId) : current++;
  }, 1000);
}

printNumbers(1, 5);

function printNumbers2(from, to) {
  let current = from;

  setTimeout(function go() { 
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers2(6, 10);
