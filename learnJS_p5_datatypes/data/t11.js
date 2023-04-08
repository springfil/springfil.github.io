// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.,
let d = new Date(2012, 1, 20, 3, 12);
alert(d);

// Напишите функцию getWeekDay(date),
// показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
console.log(getWeekDay(date)); // ПТ

//Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day;
}

//Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}



/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
 Иногда это 30, 31 или даже февральские 28/29.
Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).*/.
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);// 0 - последнее число прошлого месяца
    return date.getDate();
  }



// Чтобы получить количество секунд, нужно сгенерировать объект date на самое начало текущего дня – 00:00:00,
//  а затем вычесть полученное значение из «сейчас».
// Разность даст нам количество миллисекунд с начала дня, делим его на 1000 и получаем секунды
  function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }





