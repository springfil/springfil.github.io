1) способы создания массива [], new array ()
2) строка массив? 
3)какой функция применяет к каждому элементу массива функцию и возвращает новый массив?
4) написать функция , которая принимает массив , эта функция должна возввращать другую 
фунцию принимающая целое положительное число в качестве аргумента и возвращающая новый массив
//multiplyAll([1, 2, 3])(2) = [2, 4, 6];

function multiplyAll(arr){
    return function(num){
    return arr.map(el => el * num);
    }
  }
зарелизить такую функцию с filter 
//multiplyAll([1, 2, 3])(2) = [1,3];
5) свойство длины ( можем ли мы его менять )

6) как тогда очистить массив ()
let arr = [1, 2 , "aboba", {aboba: 2}];
let arr2 = [1, 2 , "aboba", {aboba: 2}];
let arr3 = [1, 2 , "aboba", {aboba: 2}];
let arr4 = [1, 2 , "aboba", {aboba: 2}];
//
//
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
- присвоить пустой массив 
- очистить длину
- вырезать лишние arr.splice(0, arr.length);
- while(arr.length) {arr.pop(); } --- 

7)//Удалить из массива повторяющиеся значения, вернуть только уникальные элементы
let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
//

//console.log(uniqueArray(array))[1, 2, 3, 5, 9, 8]
Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]
function uniqueArray(array) {
    let hashmap = {};
    let unique = [];
  
    for(var i = 0; i < array.length; i++) {
      // если в объекта еще нет ключа, равного значению элемента, добавляем
      if(!hashmap.hasOwnProperty(array[i])) {
        hashmap[array[i]] = 1;
        unique.push(array[i]);
      }
    }
  
    return unique;
  }

5) немутирующие/мутирующие 
push pop shist unshift reverse sort splice fill join
map forEach filter find includes indexOf concat reduce some every 


6) отличие мап / фильтр мап/foreach

// You are going to be given an array of integers. Your job is to take that array and 
// find an index N where the sum of the integers to the left of N is equal to the sum of 
// the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, 
// the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
function findEvenIndex(arr) {
    // true или -1
    return arr.findIndex(
      (item, i) =>
        // [левый] и суммируем
        arr.slice(0, i).reduce((acc, c) => acc + c, 0) ===
        // [правый] и суммируем
        arr.slice(i + 1).reduce((acc, c) => acc + c, 0)
    );
  }
// для других 
  Найдите общее количество минут, затраченное на все задачи, которые были завершены, используя reduce
  const tasks = [
    { id: 1, name: 'Task 1', status: 'done', time: 30 },
    { id: 2, name: 'Task 2', status: 'in progress', time: 60 },
    { id: 3, name: 'Task 3', status: 'done', time: 45 },
    { id: 4, name: 'Task 4', status: 'todo', time: 20 },
    { id: 5, name: 'Task 5', status: 'done', time: 90 },
    { id: 6, name: 'Task 6', status: 'done', time: 60 },
    { id: 7, name: 'Task 7', status: 'in progress', time: 15 },
    { id: 8, name: 'Task 8', status: 'done', time: 120 },
    { id: 9, name: 'Task 9', status: 'in progress', time: 30 },
    { id: 10, name: 'Task 10', status: 'todo', time: 45 },
  ];  /// разные возвраты 