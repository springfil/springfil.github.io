//Планирование вызовов
//setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
//setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);
//func|code Функция или строка кода для выполнения.

function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон
// валидно -
setTimeout("alert('Привет, Джон')", 1000);
// но лучше так
setTimeout(() => alert('Привет'), 1000);



//Отмена через clearTimeout
let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера

clearTimeout(timerId);// очистили очередь, но идентификатор никуда не пропал
alert(timerId); 



//setInterval отличие - функция запускается не один раз, а периодически через указанный интервал времени.
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);

{// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);
// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);}

//Во время показа alert время тоже идёт



//Вложенный setTimeout
{
//вместо: let timerId = setInterval(() => alert('tick'), 2000);

let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);
}
{
let i = 1;
setInterval(function() {
  func(i);
}, 100); 
// тут t выполнения функции мб > delay, тогда вызовы будут без задержек

//Второй использует вложенный setTimeout:
let i = 1;
setTimeout(function run() {
  func(i);
  setTimeout(run, 100);
}, 100);
// тут гарантированна задержка 100мс 62-я строка
}



//delay = 0
setTimeout(() => alert("Мир"));//второй

alert("Привет"); //первый 
//как-то связано с событийным циклом