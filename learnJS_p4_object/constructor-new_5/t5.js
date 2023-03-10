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



// Создание класса объектов с помощью конструктора (создание классов-конструкторов):

// function Имя_класса_объектов(св-во1, св-во2){
// 	this.свойство1 = св-во1; // значение для свойства1 берется из значения аргумента св-во1
// 	this.свойство2 = св-во2;
// }
// Создание нового объекта на основе конструктора для класса объектов:

// let имя_объекта = new имя_класса("значение_св-ва1","значение_св-ва2");
// или
// let имя_объекта =new имя_класса();
// имя_объекта.св-во1="значение_св-ва1";
// имя_объекта.св-во2="значение_св-ва2";

// Добавление свойств к классу объектов:
Student.prototype.biology = "отлично";



// Добавить к конструктору объектов Browser метод aboutBrowser,
// который будет выводить на экран обозревателя информацию о свойствах этого объекта
function showBrowser() {
    console.log("Обозреватель: " + this.name + " " + this.version);
  }
   
function Browser(name, version) {
    this.name = name;
    this.version = version;
    this.aboutBrowser = showBrowser;
  }
   
let myBrowser=new Browser("Хром", 'vХЗ');
myBrowser.aboutBrowser();

//или при помощи функции описанной внутри конструктора 
function Browser(name, version) {
    this.name = name;
    this.version = version;
    this.aboutBrowser = function(){
      console.log("Обозреватель: " + name + " " + version);
    }
  }

let myBrowser=new Browser("Хром", 'vХЗ');
myBrowser.aboutBrowser();



// Создать класс объектов (Tour) для работы туристической фирмы 
// с методом подсчета стоимости поездки из расчета:
//  количества человек * количество дней * тариф страны. 
//  Создать экземпляр объекта turkeyTour со значениями свойств. 
//  Вывести все свойства объекта на экран. Метод объекта расчет создавать на основе функции.

function Tour(people, days, rate){
    this.people = people;
    this.days = days;
    this.rate = rate;
    this.calc = function(){
        console.log(this.rate * this.people * this.days)
    }
    }

const turkeyTour = new Tour(2, 7, 100);
for (let key in turkeyTour) {
    console.log(key + " " + turkeyTour[key])
  }

turkeyTour.calc();  