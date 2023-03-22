const person = {
    name: 'biba',
    age: 27,
}

const personList = {};

personList[person] = 'Moscow';
console.log(personList)// obj obj
////

const person = {
    name: 'biba',
    age: 27,
    toString() {
        return this.name
    }
    valueOf() {
        return this.name
    }
}
personList[person] = 'Moscow';
console.log(personList)// biba - moscow

// метод person
[Symbol.toPrimitive]: function (hint) { // функция принимает тип преобразования хинт
    console.log(hint);
    switch(hint) {
       case 'string':
           return this.name
       case 'number':
           return this.age
       default:
           return `${this.name}, ${this.age}`
    }