// Task 1
// Каковы будут результаты выполнения? Почему?
function Rabbit1() {}
Rabbit.prototype = { eats: true };

var rabbit1 = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit.eats); // Output: true

// Task 2
// А если код будет такой? (заменена одна строка):
function Rabbit(name) {}
Rabbit.prototype = { eats: true };

var rabbit2 = new Rabbit();

Rabbit.prototype.eats = false; // (*)

console.log(rabbit.eats); // Output: false - тк мы не перезаписываем объект, а меняем существующий



// Task 3
// А такой? (заменена одна строка)
function Rabbit(name) {}
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

console.log(rabbit.eats); // Output: undefined



// Task 4
// А если бы в последнем коде вместо строки (*) было delete rabbit.eats?
function Rabbit(name) {}
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

delete rabbit.eats; // (*)

console.log(rabbit4.eats); // true (delete не продолжает поиск в прототипе, если не находит св-во в объекте)

// Task 5
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.
const obj = {};
let obj2 = new obj.constructor();

// Если у конструктора св-во prototype имеет св-во constructor, то все будет работать, если нет, то нет.
