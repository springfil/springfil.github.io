const person = {
    name: 'aboba'
};

const obj = {
    name: 20
};

//console.log(obj.person.name)
//console.log(obj.[person.name])

//У obj нет ключа person. Таким образом, mouse.bird равно undefined

let biba = {a:1}
let boba;

boba = biba;
biba.a = 2;
console.log(boba.a);

//[] ['']


function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const member = new Person('aboba', '20');
  Person.getPersonList = function () {
    return `${this.name} ${this.age}`;
  }
  
  console.log(member.getPersonList());

// В JavaScript функции являются объектами,
// поэтому метод getPersonList добавляется к самому объекту функции-конструктора. 
// По этой причине мы можем вызвать Person.getPersonList, но member.getPersonList выдает TypeError.

// Если вы хотите, чтобы метод был доступен для всех экземпляров объекта, 
// вы должны добавить его в свойство прототипа  Person.prototype.getFullName

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

///

function Person() {
    this.name = 'biba';
    return { name: 'boba' };
  }
  
  const student = new Person();
  console.log(student.name);

//
let student = {
    name: 'Дмитрий',
    objMethod() {
        console.log(this) // {name: 'Дмитрий', objMethod: ƒ}

        let arrowFunc = () => console.log(this)
        arrowFunc() // {name: 'Дмитрий', objMethod: ƒ}

        function funcWithinFunc() {
            console.log(this)
        }
        funcWithinFunc() // window // НЕЕ ПОНЯЛ
    }
  }
  
  student.objMethod()

//
let student1 = {
    name: 'Пётр',
    statement() {
        console.log(`Имя студента ${this.name}`)
    }
  }
  
  student1.statement() 
  let anotherVar = student1.statement
  anotherVar()  