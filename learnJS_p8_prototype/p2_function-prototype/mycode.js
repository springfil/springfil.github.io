function Animal() {
  this.eats = true;
}

function Rabbit(jumps) {
  this.jumps = jumps;
}
Rabbit.prototype = new Animal();

function Cat(meows, hasWhiskers) {
  this.meows = meows;
  this.hasWhiskers = hasWhiskers;
}
Cat.prototype = new Animal();

let rabbit = new Rabbit(true);
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true

let cat = new Cat(true, true);
console.log(cat.eats); // true
console.log(cat.meows); // true
console.log(cat.hasWhiskers); // true
