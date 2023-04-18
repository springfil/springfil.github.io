// Функции можно не только вызывать, но и добавлять/изменять их св-ва, получать к ним доступ, как к объектам.



// Св-во функции 'name' содержит имя функции. Имя присваивается из контекста.
const foo = function () {return 'zopa'};
console.log(foo.name);            //'foo'
const fooArrow = () => 'arrow function';
console.log(fooArrow.name);       //'fooArrow'

// Методы объекта также имеют имена
const obj = {
  counter: 10000,
  methodExample() {
    return 'it\'s a method';
  },
};
console.log(obj.methodExample.name);       // 'methodExample'



// Св-во 'length' содержит кол-во параметров функции при объявлении (rest не считается)
const foo2 = function (a, b, c, d, ...rest) {
  return a + b + c + d + rest;
};
console.log(foo2.length);       // 4
console.log(foo.length);        // 0



// Можно добавлять свои св-ва (св-ва НЕ есть переменная)
function foo3 () {
  console.log('foo3 called');
  if (foo3.counter) {
    foo3.counter++;
  } else {
    foo3.counter = 1;
  }
}
foo3();
foo3();
foo3();
console.log(`total foo3 calls: ${foo3.counter}`);      // 'total foo3 calls: 3'


// `Named Function Expression (NFE)` - синтаксис для динамического 'ссылания' функции на себя (this в мире функций). Не работает с Function Declaration.
const foo4 = function func(name) {
  return name ? `name is: ${name}` : func('guest');
}
const foo5 = foo4;
console.log(foo5());      // 'name is: guest'