// долги по qa
// полифилы +
// посмотреть видео по дебагу в консоли

// this в методах/свойствах /стрелках + use strict 
// потеря контекста 
// ссылочный тип 14,4 (начать с этого)
// (конструкторы нужны для обьектов у которых есть свое состояние)

// опциональная цепочка
// обертка в примитив 

// ма


// console.log(true+false)
// console.log(null + undefined)
// console(1 + '123')
// console({} + 123)
// console({'aboba' : 'a'} + {a : 'aboba'})

const person = {
    name: 'biba',
    age: 27,
}

const personList = {};

personList[person] = 'Moscow';
console.log(personList)//7 

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

// если personList[+person] = 'Moscow';
const person = {
    name: 'biba',
    age: 27,
    valueOf() {
        return this.age
    toString() {
        return 'blablabla'
    }
   
}
//
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
}
//переписать function(hint)