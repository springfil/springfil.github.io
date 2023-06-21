let a = new Promise((resolve, reject) => {
  for(let i = 1; i <= 3; i++){
    console.log(i)
  };
  resolve("+")
}).finally(() => console.log("zopa")) 
//1 2 3 zopa



function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

console.log('1');

delay(1000).then(() => {
  console.log('2');
});

console.log('3');



  //Что выведет код ниже?
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); // будет 1 апрувится только первый resolve 
 




// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  return new Promise ( resolve => setTimeout(resolve, ms))
}
delay(3000).then(() => console.log('выполнилось через 3 секунды'));



let promise = new Promise((resolve, reject) => {
  a = "zopa";
  resolve(a)
})
.then(result => {
  console.log(result);
  console.log(promise);
  return result.toUpperCase()
})
.then(result => console.log(result))
//zopa Promise ZOPA 
