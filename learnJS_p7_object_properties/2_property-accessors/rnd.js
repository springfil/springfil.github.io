// function Name() {}

// function Test() {
//   Name.call({name: 123}, ...arguments);
//   Name.apply({name: 123}, arguments);
// }

// const range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// // Test.apply({}, range);

// const func = Test.bind({a: 3}, 1, 2, 3, 4);
// // console.log(func === Test);

// const arrow = (...args) => {
//   console.log(this.name, ...args);
// }

// arrow.bind({name: 'aboba'}, 1,2,3,4,5,6)();

// @tkens
function myCall(thisContext, ...rest) {
  let args = rest;
  const func = this;
  // let origContext = thisContext;
  // let myfunc = function(){
  //   return func(...args);
  // }
  const save = thisContext.myfunc
  
  thisContext.myfunc = func;

  thisContext.myfunc = save
  let result = thisContext.myfunc(...args);
  
  // delete thisContext.myCallFunc;
  delete 
  return result;
}

Test.call({myfunc: 3}, 1,2,3,4);

function myApply() { }

// function myBind(func, context) {

//   return function(...args){
//     return func.apply(context,args);
//   };
// }
function myBind(context){
  let f = this;
  context.f = f; 
  
}

Function.prototype.myCall = myCall;
Function.prototype.myApply = myApply;
Function.prototype.myBind = myBind;

function Test() {
  console.log(this, ...arguments);
}

const obj = {aboba: 3, myfunc: 'abob'};

Test.myCall(obj, 1,2,3) //console.log  === {aboba: 3}, 1, 2, 3
Test.myApply(obj, [1, 2, 3]) //console.log  === {aboba: 3}, 1, 2, 3
Test.myBind(obj, 1,2,3)() //console.log  === {aboba: 3}, 1, 2, 3

function myCall(thisContext, ...rest) {
  // Сохраняем ссылку на функцию, которую нужно вызвать
  const func = this;

  // Сохраняем ссылку на существующую функцию в контексте объекта, чтобы ее можно было восстановить после вызова новой функции
  const savedFunc = thisContext.myfunc;

  // Сохраняем ссылку на новую функцию в контексте объекта
  thisContext.myfunc = func;

  // Вызываем новую функцию в контексте объекта с переданными аргументами
  let result = thisContext.myfunc(...rest);

  // Восстанавливаем ссылку на исходную функцию в контексте объекта
  delete thisContext.myfunc;
  if (savedFunc) {
    thisContext.myfunc = savedFunc;
  }

  // Возвращаем результат вызова новой функции в контексте объекта
  return result;
}

function myCall(thisContext, ...rest){
  const func = this; // 
 
   const savedFunc = thisContext.myfunc;
   thisContext.myfunc = func;
 
   let result = thisContext.myfunc(...rest);
 
   delete thisContext.myfunc;
 
   return result


   