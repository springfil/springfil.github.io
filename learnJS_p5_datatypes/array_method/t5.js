//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
camelize = (str) => str.split('-')
.map((str, index) => index  ? str[0].toUpperCase() + str.slice(1) : str)
.join('');
console.log(camelize("background-color"))



// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы 
// со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
//решение
function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b));
}



// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет 
// из него все значения кроме тех, которые находятся между a и b. 
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}


//
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr ); // 8, 5, 2, 1, -10



//Скопировать и отсортировать массив
let copySorted = (arr) => arr.slice().sort();

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)



//Создать расширяемый калькулятор
function Calculator{
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function(str) {
        const[a, operator, b] = str.split(' ');
        return this.methods[operator](+a, +b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
}



//Трансформировать в массив имён
let names = users.map(item => item.name);



//Трансформировать в объекты
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));



//Отсортировать пользователей по возрасту 
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }

//Средний возраст
function getAverageAge(arr) {
    let result = 0;
    for (const user of arr) {
        result += user.age
    }
    return result / arr.length;
}  