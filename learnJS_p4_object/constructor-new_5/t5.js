// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
function Calculator(){
    this.read = function (){
        this.a = +prompt('a','');
        this.b = +prompt('b','');
    }
    this.sum = function (){
        return this.a + this.b
    }
    this.mul = () => {
        return this.a * this.b
    }
}

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());



//Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. 
// Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений,
// с учётом начального значения startingValue.
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = () => {
        let newValue = +prompt("введите число",'');
        this.value += newValue
    }
}

// Ниже вы можете посмотреть работу кода:
let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
alert(accumulator.value); // выведет сумму этих значений



//функция конструктор с персональным данными (пол, возвраст,имя)
function Person(person_name, person_age, person_gender){
    this.name = person_name;
    this.age = person_age;
    this.gender = person_gender;
}

const person1 = new Person('Biba',18,'M');
const person2 = new Person('Boba',20,'F');

console.log(person1.name +' '+ person2.name);

person1.greet = function () {
    console.log('Привет');
}

person1.greet();   //  Привет
person1.greet;   // f{}


