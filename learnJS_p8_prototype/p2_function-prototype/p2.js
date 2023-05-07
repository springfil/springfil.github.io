// Функция конструктор имеет св-во `prototype`, которое определяет [[Prototype]] экземпляров.
// по умолчанию `prototype` это объект, в котором лежит св-во `constructor` - ссылка на саму функцию-конструктор. (кстати св-во есть у всех функций)
const user = {
  name: "zopa",
  age: 27,
};

function User() {
  // В конструкторе скрытое св-во prototype = {constructor: User}
  this.message = "instance of Foo";
}

const user99 = new User(); // prototype по умолчанию
console.log(user99.constructor); // [Function: User]
console.log(user99.__proto__.constructor); // [Function: User]        
// (не забываем, что если св-ва нет в объекте, оно ищется дальше в прототипе)

User.prototype = user; // определили прототип для созданных далее экземпляров

const admin = new User();
console.log(admin.__proto__); // Output: { name: 'zopa', age: 27 }

User.prototype = null; // переопределили прототип для созданных далее экземпляров

const guest = new User();
console.log(guest.__proto__); // [Object: null prototype] {}


// (!) Если мы перепишем объект prototype в конструкторе, 
//то утеряем св-во constructor, поэтому лучше добавлять в prototype св-ва
function Rabbit() {}
Rabbit.prototype = {
  jumps: true,
};

let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); //  false            
//Чтобы не терять конструктор - Rabbit.prototype.jumps = true
