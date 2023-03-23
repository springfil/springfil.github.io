// три типа ковычек '' "" `${выражение}`

//спецсимволы 
/*
\n	Перевод строки
\r	В текстовых файлах Windows для перевода строки используется комбинация символов \r\n, а на других ОС это просто \n. Это так по историческим причинам, ПО под Windows обычно понимает и просто \n.
\', \"	Кавычки
\\	Обратный слеш
\t	Знак табуляции */


//Доступ к символам
//[pos] 
//str.at(pos) - считает по отрицательным значениям с конца строки 
//[-d] - вернет undefined



//Строки неизменяемы
let str = 'Hi';
str[0] = 'h'; // ошибка
alert( str[0] ); // не работает
//
let str = 'Hi';
str = 'h' + str[1]; // заменяем строку
alert( str ); // hi



//изменение регистра 
//Методы toLowerCase() и toUpperCase()
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i'



//поиск подстроки
// Первый метод — str.indexOf(substr, pos).

// Он ищет подстроку substr в строке str, начиная с позиции pos,
//  и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id
alert( str.indexOf('id', 2) ) // 12

// можно найти все вхождения через цикл 
let str = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
}
//релевантно
let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

//Трюк с побитовым НЕ
// ~n равняется 0 только при n == -1
// Соответственно, прохождение проверки 
// if ( ~str.indexOf("…") ) означает, что результат indexOf отличен от -1, совпадение есть.
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Совпадение есть' ); // работает
}

//Более современный метод str.includes(substr, pos) возвращает true,
// если в строке str есть подстрока substr, либо false, если нет.
//Это — правильный выбор, если нам необходимо проверить, есть ли совпадение, но позиция не нужна:
alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false
alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3

// Методы str.startsWith и str.endsWith проверяют, 
// соответственно, начинается ли и заканчивается ли строка определённой строкой:
alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

//Получение подстроки substring, substr и slice.
str.slice(start [, end]) // не вкл конец

let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );

//Если аргумент end отсутствует, slice возвращает символы до конца строки:
let str = "stringify";
alert( str.slice(2) ); // ringify, с позиции 2 и до конца
//можно задачать отрицательные значения 


str.substring(start [, end])// start может быть > end
substr(start, length)	//length символов, начиная от start



//СРАВНЕНИЕ СТРОК в utf-16
// str.codePointAt(pos)
// Возвращает код для символа, находящегося на позиции pos:
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90
//String.fromCodePoint(code)
// Создаёт символ по его коду code
alert( String.fromCodePoint(90) ); // Z
//
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ


//Будь умницей
str.localeCompare(str2) 
// Отрицательное число, если str меньше str2.
// Положительное число, если str больше str2.
// 0, если строки рав