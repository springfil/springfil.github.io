// Если передавать как колбэк метод с `this` в логике, то потеряется контекст.
// Чтобы его привязать используется `bind(this, ...args)()`, `call(this, ...args)`, `apply(this, ...args)`
let user = {
  name: "Vova",
  getName() {
    console.log(this.name);
  },
};
setTimeout(user.getName, 0); //undefined
setTimeout(user.getName.bind(user), 0); //Vova'



// bind(null) ссылается на глобальный объект
function f11() {
  console.log(this);
}
let user11 = {
  g: f11.bind(null),
};
user11.g(); // globalThis



// Есть второй метод - можно запихнуть выполнение в анонимную функцию, тогда у выполняющейся функции сработает замыкание на объекте.
// (!) Этот метод имеет уязвимость - если мы перезапишем объект во время вызова (зайдет другой пользователь), то мы получим ошибку

setTimeout(() => user.getName(), 0); // 'Vova'

setTimeout(() => (user = null), 1); // Перезаписываем объект чтобы показать уязвимость
// setTimeout(() => user.getName(), 1000);              // TypeError: Cannot read properties of null (reading 'getName')



// Если у объекта много методов, которые мы собираемся активно передавать, имеет смысл заранее перезаписать их с bind():
const user2 = {
  name: "Anton",
};
for (let key in user) {
  if (typeof user[key] === "function") {
    user[key] = user[key].bind(user);
  }
}
// (!) Но bind нельзя применить дважды, так что если нужно забиндить на что-то еще, так лучше не делать
setTimeout(user.getName.bind(user2), 0); //  'Vova'  - ожидалось 'Anton'



// bind также может привязывать аргументы. Таким образом можно 'зафиксировать' часть аргументов:
function mul(a, b) {
  console.log(a * b);
}
const double = mul.bind(null, 2);
console.log(
  double(5), //10
  double(10), // 20
  double(1) // 2
);



// Если нужно зафиксировать аргументы без фиксации this, то придется создать функцию внутри функции со ссылкой на this, чтобы фиксировать, не передавая в нее this
function partial(func, ...argsBound) {
  // не принимаем this
  return function (...args) {
    return func.call(this, ...argsBound, ...args); // this вложенной функции будет ссылаться на родительский объект (где функция объявлена)
  };
}

const obj = {
  name: "Petya",
  say(time, phrase) {
    console.log(`[${time}] - ${this.name}: ${phrase}`);
  },
};

obj.sayNow = partial(
  obj.say,
  new Date().getHours() + ":" + new Date().getMinutes()
); // Создали новый метод объекта с зафиксированными аргументами
obj.sayNow("Hello"); // [10:15] - Petya: Hello
