//„Какое «официальное» название JavaScript?“ - prompt
//«ECMAScript», то показать: «Верно!»,
//в противном случае – отобразить: «Не знаете? ECMAScript!»

let question = prompt('Какое «официальное» название JavaScript?','');
(question=='ECMAscript')?
    console.log('ага'):console.log('неа')

//Используя конструкцию if..else, напишите код, 
//который получает число через prompt, а затем выводит в alert:    
//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.    

let value = +prompt('input value',0);
if (value > 0) {
    console.log( 1 );
  } else if (value < 0) {
    console.log( -1 );
  } else {
    console.log( 0 );
  }

//Перепишите конструкцию if с использованием условного оператора '?':
/*let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
} */

let result = ((a+b)<4)?'low':'high';

//Перепишите if..else с использованием нескольких операторов '?'.
/*let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */

let message = (login=='сотрудник')?'Привет':
    (login=='директор')?'Здравствуйте':
    (login == '')?'Нет логина':
    '';
    