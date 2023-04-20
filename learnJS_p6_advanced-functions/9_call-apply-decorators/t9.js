// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
function spy(func) {
  spy.calls = [];
  return function (...args) {
    spy.calls.push(args);
    return func.call(this, ...args);
  };
}
function sum1(a, b) {
  return a + b;
}
sum1 = spy(sum1);
console.log(
  sum1(5, 10), // 15
  sum1(99, 1), // 100
  spy.calls // [ [ 5, 10 ], [ 99, 1 ] ]
);



// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
function delay(f, ms) {
  return function (...args) {
    setTimeout(() => f.call(this, ...args), ms);
  };
}
function sum2(a, b) {
  console.log(a + b);
}
const delayedSum2 = delay(sum2, 1000);
delayedSum2(10, 15); //  25   (after 1 sec)



// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд.
// Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
const debounce = function func(f, ms) {
  func.isOpen = true;
  return function (...args) {
    if (func.isOpen) {
      func.isOpen = false;
      f.call(this, ...args);
      setTimeout(() => (func.isOpen = true), ms);
    } else {
      console.log(`try again in ${ms / 1000} seconds`);
    }
  };
};
function sum3(a, b) {
  console.log(a + b);
}
const debouncedSum = debounce(sum3, 5000);
debouncedSum(10, 23); //33
debouncedSum(10, 24); //'try again in 5 seconds'


//две задачи не решил