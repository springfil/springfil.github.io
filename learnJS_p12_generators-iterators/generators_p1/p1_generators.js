//ФУНКЦИЯ ГЕНЕРАТОР
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

//Вместо этого она возвращает специальный объект, так называемый «генератор», для управления её выполнением.
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}



// "функция-генератор" создаёт объект "генератор"
let generator = generateSequence();
console.log(generator); // [object Generator]



//Результатом метода next() всегда является объект с двумя свойствами:
// value: значение из yield.
// done: true, если выполнение функции завершено, иначе false.
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();
let two = generator.next();
let zopa = generator.next();
let aboba = generator.next();

console.log(JSON.stringify(one)); // {value: 1, done: false}
console.log(JSON.stringify(two)); // {"value":2,"done":false}
console.log(JSON.stringify(zopa)); // {"value":3,"done":true}
console.log(JSON.stringify(aboba)); // {"done":true}



//перебор генераторов
// генераторы явл перебираемыми обьектами,поэтому for of работает без  проблем
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

for (let value of generator) {
  console.log(value); // 1, затем 2, затем 3
}

console.log([0, ...generateSequence()]); // 0,1,2,3
console.log(Array.from(generateSequence()));
//значение возвращаемое return игнорируется, там done: true



//использование генераторов для перебираемых обьектов
// вот перебираемый обьект
let range = {
  from: 1,
  to: 5,

  // for..of range вызывает этот метод один раз в самом начале
  [Symbol.iterator]() {
    // ...он возвращает перебираемый объект:
    // далее for..of работает только с этим объектом, запрашивая следующие значения
    return {
      current: this.from,
      last: this.to,

      // next() вызывается при каждой итерации цикла for..of
      next() {
        // нужно вернуть значение как объект {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// при переборе объекта range будут выведены числа от range.from до range.to
alert([...range]); // 1,2,3,4,5

//используем функцию генератор для итерации
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

console.log([...range]); //1,2,3,4,5
console.log(Array.from(range)); //1,2,3,4,5

const iterator = range[Symbol.iterator]();
console.log(iterator.next()); //{value: 1, done: false}
console.log(iterator.next()); //{value: 2, done: false}
//ГДЕ ПОЧЕМУ ТУТ next() во втором варианте написания , да я понимаю что yield возвращает обьект



//композиция генераторов - вставка генераторов друг в друга
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);
}

let str = "";

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

//тоже самое
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {
  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;

  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;

  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;
}

let str = "";

for (let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9a..zA..Z



//   Композиция генераторов – естественный способ вставлять вывод одного генератора в поток другого.
//   Она не использует дополнительную память для хранения промежуточных результатов.

//yield – дорога в обе стороны
function* gen() {
  // Передаём вопрос во внешний код и ожидаем ответа
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result + 1); //5 (3)
}

let generator = gen();
console.log(generator); //gen {<suspended>} (1)

let question = generator.next().value; // <-- yield возвращает значение
console.log(question); //2 + 2 = ? (2)

generator.next(4); // --> передаём результат в генератор

//можно так возобновить генератор через некоторое время
setTimeout(() => generator.next(4), 1000);

//генератор может обмениваться результатами с вызывающим кодом, передавая значения в next/yield.
function* gen() {
  let ask1 = yield "2 + 2 = ?";

  alert(ask1); // 4

  let ask2 = yield "3 * 3 = ?";

  alert(ask2); // 9
}

let generator = gen();

console.log(generator.next().value); // "2 + 2 = ?"

console.log(generator.next(4).value); // "3 * 3 = ?"

console.log(generator.next(9).done); // true



//generator.throw
function* gen() {
  try {
    let result = yield "2 + 2 = ?";

    alert(
      "Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение"
    );
  } catch (e) {
    alert(e); // покажет ошибку
  }
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error("Ответ не найден в моей базе данных"));

//мы можем отловить её во внешнем коде, как здесь:
function* generate() {
  let result = yield "2 + 2 = ?"; // Ошибка в этой строке
  console.log(result);
}

let generator = generate();

let question = generator.next().value;

try {
  generator.throw(new Error("Ответ не найден в моей базе данных"));
} catch (e) {
  console.log(e); // покажет ошибку
}
