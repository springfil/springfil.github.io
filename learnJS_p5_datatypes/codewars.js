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
      (_, i) =>
        // [левый] и суммируем
        arr.slice(0, i).reduce((acc, c) => acc + c, 0) ===
        // [правый] и суммируем
        arr.slice(i + 1).reduce((acc, c) => acc + c, 0)
    );
  }