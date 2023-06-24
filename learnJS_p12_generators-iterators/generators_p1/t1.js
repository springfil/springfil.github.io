// Если мы используем 1 как зерно, то значения будут:

// 16807
// 282475249
// 1622650073
// …и так далее…
// Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

// Пример использования:

// let generator = pseudoRandom(1);

// alert(generator.next().value); // 16807
// alert(generator.next().value); // 282475249
// alert(generator.next().value); // 1622650073

function* pseudoRandom(a) {
  let value = a;

  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
