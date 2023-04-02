{// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// For example, given the following list:

var list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }
}


{
//Проверю массив на массивность)
let arr = [];
console.log(Array.isArray(arr));// true
//------------

// заполню  0 
let arr2 = Array(5).fill(0);
console.log(arr2);//[0 0 0 0 0]

//хочу какие-то числа в порядке возрастания
const arr3 = arr2.map( function(val, index) {return index + 1;} );
console.log(arr3) ;// 1 2 3 4 5

//найти сумму всех элементов 
const sum = arr3.reduce((a, b) => a + b, 0);
console.log(sum); //15

//возведем четные эл-ты в квадрат , а нечетные обнулим
const multiEven = [1,2,3,4,5].map(
  (val) => val % 2 == 0 ? val*val : val = 0, 1
);
console.log(multiEven);

//узнаем есть ли в multiEven повторяющиеся эл-ты
const dupl = (new Set(multiEven).size) !== multiEven.length;
console.log (dupl);

//скок там 0
const howZero = multiEven.filter((x) => x == 0).length;
console.log(howZero);

//выведем кол-во 0 
let zeroIn = 0;
multiEven.forEach(function(item, index) {
  if(item === 0) zeroIn++;
});
console.log('кол-во 0 = '+zeroIn) // кол-во нулей равно 3

}