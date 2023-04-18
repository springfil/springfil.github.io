// Реализуйте makeCounter(), создающий функцию со счетчиком вызова так,
//чтобы счётчик мог уменьшать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
function makeCounter() {
  return function counter() {
    console.log("counter called");

    if (counter.value) {
      counter.value++;
    } else {
      counter.value = 1;
    }

    counter.set = function (value) {
      counter.value = value;
    };

    counter.decrease = function () {
      counter.value--;
    };
  };
}
const counter = makeCounter();
counter();
counter();
counter();
counter();
console.log(`counter calls: ${counter.value}`); //'counter calls: 4'




// Task 2
// Напишите функцию sum, которая бы работала следующим образом:
console.log(
  +sum(1)(2),
  +sum(1)(2)(3),
  +sum(5)(-1)(2),
  +sum(6)(-1)(-2)(-3),
  +sum(0)(1)(2)(3)(4)(5)
);

function sum(n) {
  const addMore = function (x) {
    return sum(n + x);
  };

  addMore.valueOf = function () {
    return n;
  };

  return addMore;
}
