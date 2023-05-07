// Task 1
// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // (1) true

delete rabbit.jumps;
console.log(rabbit.jumps); // (2) null

delete animal.jumps;
console.log(rabbit.jumps); // (3) undefined

// Task 2
// С помощью свойства __proto__ задайте прототипы так, 
//чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head.
// Например, pockets.pen должно возвращать значение 3 (найденное в table), 
//а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses 
//– через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
let head = {
  glasses: 1,
};
let table = {
  pen: 3,
};
let bed = {
  sheet: 1,
  pillow: 2,
};
let pockets = {
  money: 2000,
};

table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;
console.log(
  pockets.pen, //3
  bed.glasses //1      glasses быстрее получить через head.glasses тк во время поимка не придется обращаться к [[Prototype]]
);



// Task 3
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); // св-во фул присвоится объекту rabbit:
console.log(rabbit); // { full: true }

// Task 4
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
let hamster = {
  stomach: [], // У хомяков общий желудок. Нужно присвоить каждому хомяку свой отдельный.

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
