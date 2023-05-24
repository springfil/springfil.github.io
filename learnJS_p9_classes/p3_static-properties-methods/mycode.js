{class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static compareByName(personA, personB) {
    if (personA.name < personB.name) {
      return -1;
    }
    if (personA.name > personB.name) {
      return 1;
    }
    return 0;
  }
}

let people = [
  new Person("Zheka", 30),
  new Person("Alita", 25),
  new Person("Tim", 20),
];

people.sort(Person.compareByName);

console.log(people[0].name); // Alita
}

{
  class User {
    static staticMethod() {
      console.log(this === User);
    }
      neStatic(){
      console.log(this instanceof User);
         console.log(this.__proto__ === User.prototype);
          
      }
  }
  
  User.staticMethod(); // true
  new User().neStatic(); // true true
}