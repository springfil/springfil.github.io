// Что выведет функция?
function f1() {
  console.log(this); // globalThis
}

let user1 = {
  g: f1.bind(null),
};

user1.g();



// Можем ли мы изменить this дополнительным связыванием? Что выведет этот код?
function f2() {
  console.log(this.name);
}
f2 = f2.bind({ name: "Вася" }).bind({ name: "Петя" });
f2(); //  'Вася' - bind работает только 1 раз



// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

console.log(bound.test); // undefined, тк bind полностью поменял контекст функции

//не доделал