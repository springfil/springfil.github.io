// методы массивов 
/*
Добавление/удаление элементов
Мы уже знаем методы, которые добавляют и удаляют элементы из начала или конца:

arr.push(...items) – добавляет элементы в конец,
arr.pop() – извлекает элемент из конца,
arr.shift() – извлекает элемент из начала,
arr.unshift(...items) – добавляет элементы в начало.
*/



//SPLICE - швецарский нож отличен от delete
//arr.splice(start[, deleteCount, elem1, ..., elemN])
// Он изменяет arr начиная с индекса start: удаляет deleteCount элементов и 
// затем вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr.splice(0, 3, "Давай", "танцевать");
alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

//Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0
//Отрицательные индексы разрешены



//SLICE   arr.slice([start], [end])
//Он возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end).
//start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)
//БЕЗ АРГУМЕНТОВ МОЖНО ЮЗАТЬ ДЛЯ КОПИРОВАНИЯ НЕИЗМЕН ИСХОДНИК



//CONCAT arr.concat(arg1, arg2...)
let arr = [1, 2];
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
//-----------------
let arr = [1, 2];

let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true, //!!!!  если нет св-ва ,то [obj obj]
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё



//Перебор: forEach
arr.forEach(function(item, index, array) {
    // ... делать что-то с item
  });
//------------
["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
    alert(`У ${item} индекс ${index} в ${array}`);
  });
//Результат функции (если она что-то возвращает) отбрасывается и игнорируется.


{
//ПОИСК indexOf/lastIndexOf и includes
// arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, 
// на котором был найден искомый элемент, в противном случае -1.
//----------------
// arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен. 
//-------------
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
//методы используют ===

const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (неверно, должен быть 0)
alert( arr.includes(NaN) );// true (верно)



//find и findIndex/findLastIndex
let result = arr.find(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
  });
// Если функция возвращает true, поиск прерывается и возвращается item.
// Если ничего не найдено, возвращается undefined.

// У метода arr.findIndex такой же синтаксис, но он возвращает индекс, на котором был найден элемент,
//  а не сам элемент. Значение -1 возвращается, если ничего не найдено.

// Метод arr.findLastIndex похож на findIndex, но ищет справа налево, наподобие lastIndexOf.
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 4, name: "Вася"}
  ];
  
  // Найти индекс первого Васи
  alert(users.findIndex(user => user.name == 'Вася')); // 0
  
  // Найти индекс последнего Васи
  alert(users.findLastIndex(user => user.name == 'Вася')); // 3



//filter
let results = arr.filter(function(item, index, array) {
    // если `true` -- элемент добавляется к results и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
  });
//----------------------
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  // возвращает массив, состоящий из двух первых пользователей
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2  

}
{
//ПРЕОБРАЗОВАНИЕ МАССИВА

// MAP
//Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
let result = arr.map(function(item, index, array) {
    // возвращается новое значение вместо элемента
  });
//------------------
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6


//sort(fn) - сортирует массив на месте, меняя в нём порядок элементов.
// sort() сортирует как строки 
arr.sort( (a, b) => a - b );
//--Используйте localeCompare для строк
let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (неправильно)
alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (правильно!)


//Метод arr.reverse меняет порядок элементов в arr на обратный.
// мутирует исходник
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1


// str.split(delim) 
let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);
alert(arr); // Вася, Петя


//Вызов arr.join(glue) делает в точности противоположное split. 
//Он создаёт строку из элементов arr, вставляя glue между ними.
let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert( str ); // Вася;Петя;Маша


//reduce/reduceRight
let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
  }, [initial]);
//------------
  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);
  alert(result); // 15

}


//Array.isArray(value) true/false


//Большинство методов поддерживают «thisArg»  find, filter, map, за исключением метода sort

