// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That 
// prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

{
function productArray(numbers){
    let result = [];
    let mult = numbers.reduce((a, b) => a * b);
    
    for (let i = 0; i < numbers.length; i++) {
      result.push(mult/numbers[i]);
    }
    
    return result;
  }
}
For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array,
//  the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) 
//  both equal 6.


//-----------
// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
function convertHashToArray(hash){
    const value = Object.values(hash);
    const key = Object.keys(hash);
    const arr = [];
  
    for (let i = 0;i < value.length; i++){
      arr.push([key[i], value[i]])
    };

    return arr.sort();
  }
// или Object.entries(o).sort(); >>>__<<<


//-----------------
// Description:
// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements from the first array multiplied by the integer.
// Example:
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
function multiplyAll(arr){
    return function(num){
    return arr.map(el => el * num);
    }
  }
// хмм multiplyAll = arr => x => arr.map(e => e * x); // прикольная цепочка


//-----------------
/*
You are going to be given an array of integers. Your job is to take that
 array and find an index N where the sum of the integers to the left of N 
 is equal to the sum of the integers to the right of N. If there is no index 
 that would make this happen, return -1. */
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



//-------------------
// Найдите общее количество минут, затраченное на все задачи, которые были завершены, используя reduce
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
  ];
  

  const minutesStatusDone = (tasks) => {
    return tasks.reduce((obj, item) => {
         if(obj[item.status]){
        obj[item.status].push(item.time)
      }
      else{
        obj[item.status] = [];
        obj[item.status].push(item.time);
      }
    return obj
    },{})
  }
  
  let arrTime = Object.
  entries(minutesStatusDone(tasks)).shift().pop()
  
  let result = arrTime.reduce((a, b) => a + b);
  console.log(arrTime);
  console.log(result);
//--- или
let alltime2 = tasks
.reduce(function (r, task){
  if(task.status === 'done'){
    r.sum += task.time;
  }
  return r
},{sum: 0});

console.log(alltime2)


//----------------
// найдите произведение элементов массива (используя reduce)
const arr1 = [1, 2, 3, 4, 5];

let result1 = arr1.reduce((acc, el) => acc * el, 1);
console.log(result1);


//-----------------
//Сгруппировать элементы массива по значению ключа используя reduce:
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 40 },
];

const ElementOfKey = (users) => {
  return users.reduce((obj,item) => {
    if(obj[item.name]){
      obj[item.name].push(item)
    }
    else{
      obj[item.name] = [];
      obj[item.name].push(item);
    }
  return obj  
  }, {})
}

console.log(ElementOfKey(users));
/*
результат 
{
  "Alice": [
    { "name": "Alice", "age": 25 },
    { "name": "Alice", "age": 40 }
  ],
  "Bob": [
    { "name": "Bob", "age": 30 }
  ],
  "Charlie": [
    { "name": "Charlie", "age": 35 }
  ]
} 
*/


//---------------------
//Разбить строку на слова и подсчитать количество повторений каждого слова:
const str = 'apple orange banana orange apple apple';

const count = (str) => {
  return str.split(' ').reduce((obj, item) => {
    if(obj[item]){
      //debugger
      obj[item] += 1;     
    }else{
      obj[item] = 1
    }
    return obj
  },{})
};

console.log(count(str)


//----------------------
//Найти наиболее часто встречающийся элемент в массиве:
const arr3 = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1];

const maxReccuring = (arr3) => {
  return arr3.reduce((obj, item) => {
    if(obj[item]){
      //debugger
      obj[item] += 1;     
    }else{
      obj[item] = 1
    }
    return obj
  },{})
};


let maxIndex,maxValue = 0;
for(let [index, value] of Object.entries(maxReccuring(arr3))){
  if(value > maxValue){
    maxValue = value;
    maxIndex = index;
  }
}

console.log(maxIndex);
console.log(maxReccuring(arr3));

