// Прототипное наследование - возможность создавать объекты на базе других объектов
// Объекты имеют скрытое св-во [[Prototype]], которое либо равно null, либо ссылается на другой объект - прототип

// Когда нужно прочитать св-во, а оно отсутствует, оно ищется в [[Prototype]]


// С помощью свойства-асессора `__proto__` можно задать/изменить [[Prototype]] 
// (`__proto__` это геттер/сеттер для [[Prototype]])
// `__proto__` - это УСТАРЕВШИЙ СИНТАКСИС. Также можно задать [[Prototype]] 
//с помощью `Object.setPrototypeOf(obj, prototype)` и узнать его с помощью `Object.getPrototypeOf(obj)`
const animal = {
  eats: true,
};
const rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal; // Теперь rabbit наследует св-ва от animal

console.log(
  rabbit.eats, // Output: true
  rabbit.jumps // Output: true
);

const longEar = {
  earLength: 10,
  __proto__: rabbit, // longEar наследует св-ва от rabbit, следовательно и от animal
};
console.log(longEar.eats); // Output: true

// (!) Ссылки не могут идти по-кругу
// animal.__proto__ = longEar;       // TypeError: Cyclic __proto__ value

// Объект обращается к [[Prototype]] только для чтения - 
//нельзя перезаписать или удалить св-во прототипа через объект-наследник
delete rabbit.eats;
console.log(animal.eats); // true



// Св-ва асессоры (гетеры, сетеры) прототипа работают как методы -
// благодаря this они обращаются к наследнику и работают с его св-ми.
const user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(str) {
    [this.name, this.surname] = str.split(" ");
  },
};

const admin = {
  __proto__: user, // admin теперь наследник user
  isAdmin: true,
};

console.log(admin.fullName); //'John Smith'
admin.fullName = "Zopa Slizerin";
console.log(
  admin.fullName, // 'Zopa Slizerin'
  user.fullName, // 'John Smith'
  admin //  { isAdmin: true, name: 'Zopa ', surname: 'Slizerin' }
);



// for...in захватывает и св-ва объекта и св-ва его прототипа. Если нам нужны только св-ва объекта, для этого есть проверка `.hasOwnProperty(prop)`


for (let prop in longEar) {
  if (longEar.hasOwnProperty(prop)) {
    console.log(`Own property: ${prop}`);
  } else {
    console.log(`Prototype property: ${prop}`);
  }
} //Own property: earLength     Prototype property: jumps     Prototype property: eats

//внутренний флаг enumerable стоит false, как и у других свойств Object.prototype.
// Поэтому поэтому их нет в цикле.

//св-ва описывающие состояние принято записывать в сам объект