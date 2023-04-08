// Дата и время 

new Date(year, month, date, hours, minutes, seconds, ms)

// Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.

// - (year) должен состоять из четырёх цифр. Для совместимости также принимаются 2 цифры и рассматриваются как 19xx, 
// к примеру, 98 здесь это тоже самое, что и 1998, но настоятельно рекомендуется всегда использовать 4 цифры.
// - (month) начинается с 0 (январь) по 11 (декабрь).
// Параметр (date) здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1.
// - Если параметры (hours/minutes/seconds/ms) отсутствуют, их значением становится 0.

//new Date()
let now = new Date();
alert( now ); // показывает текущие дату и время

{
//new Date(milliseconds) // millisecond - ТАЙМСТАМП
// Создать объект Date с временем, равным количеству миллисекунд 
// , прошедших с 1 января 1970 года UTC+0.
// 0 соответствует 01.01.1970 UTC+0

let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );


//Датам до 1 января 1970 будут соответствовать отрицательные таймстампы, например:
// 31 декабря 1969 года
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );//
 }

{//new Date(datestring)
    // Если аргумент всего один, и это строка, то из неё «прочитывается» дата. 
    // Алгоритм разбора – такой же, как в Date.parse, который мы рассмотрим позже.
    let date = new Date("2017-01-26");
    alert(date);
    // Время не указано, поэтому оно ставится в полночь по Гринвичу и
    // меняется в соответствии с часовым поясом места выполнения кода
    // Так что в результате можно получить
    // Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
    // или
    // Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)
}

{
    let date = new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
    let date1 = new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0
    let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
}



{//Получение компонентов даты
/*
    getFullYear()
    Получить год (4 цифры)
    getMonth()
    Получить месяц, от 0 до 11.
    getDate()
    Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
    getHours(), getMinutes(), getSeconds(), getMilliseconds()
    Получить, соответственно, часы, минуты, секунды или миллисекунды.
    getDay()
    Вернуть день недели от 0 (воскресенье) до 6 (суббота). Несмотря на то, что в ряде стран 
    за первый день недели принят понедельник, в JavaScript начало недели приходится на воскресенье.
*/  

//Все вышеперечисленные методы возвращают значения в соответствии с местным часовым поясом

/*
Однако существуют и их UTC-варианты, возвращающие день, месяц, год для временной зоны UTC+0: 
getUTCFullYear(), getUTCMonth(), getUTCDay().
Для их использования требуется после "get" подставить "UTC".
*/
{
    // текущая дата
    let date = new Date();
    
    // час в вашем текущем часовом поясе
    alert( date.getHours() );
    
    // час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
    alert( date.getUTCHours() );
}
/*
Помимо вышеприведённых методов, существуют два особых метода без UTC-варианта:

getTime()
Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.

getTimezoneOffset()
Возвращает разницу в минутах между UTC и местным часовым поясом:
*/
{
    // если вы в часовом поясе UTC-1, то выводится 60
    // если вы в часовом поясе UTC+3, выводится -180
    alert( new Date().getTimezoneOffset() );
}
}



{     //Установка компонентов даты
/*
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)
*/
//У всех этих методов, кроме setTime(), есть UTC-вариант, например: setUTCHours().
let today = new Date();

today.setHours(0);
alert(today); // выводится сегодняшняя дата, но значение часа будет 0

today.setHours(0, 0, 0, 0);
alert(today); // всё ещё выводится сегодняшняя дата, но время будет ровно 00:00:00.
}



{   //Автоисправление -Можно устанавливать компоненты даты 
    //вне обычного диапазона значений, а объект сам себя исправит.

    let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
    alert(date); // ...1st Feb 2013!

    //let date = new Date(2016, 1, 28);
    date.setDate(date.getDate() + 2);
    // взависимости высокосный год или нет
    alert( date ); // 1 Mar 2016

//Эту возможность часто используют, чтобы получить дату по прошествии 
//заданного отрезка времени. Например, получим дату «спустя 70 секунд с текущего момента»:  
    let date = new Date();
    date.setSeconds(date.getSeconds() + 70);

    alert( date ); // выводит правильную дату  
//-------------
    let date = new Date(2016, 0, 2); // 2 Jan 2016

    date.setDate(1); // задать первое число месяца
    alert( date );
    
    date.setDate(0); // первый день месяца -- это 1, так что выводится последнее число предыдущего месяца
    alert( date ); // 31 Dec 2015
}



{   //Date.now()
//Семантически он эквивалентен new Date().getTime(), однако метод не создаёт промежуточный объект Date.
// Так что этот способ работает быстрее и не нагружает сборщик мусора.
let start = Date.now(); // количество миллисекунд с 1 января 1970 года

    // выполняем некоторые действия
    for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
    }

    let end = Date.now(); // заканчиваем отсчёт времени

    alert( `Цикл отработал за ${end - start} миллисекунд` ); // вычитаются числа, а не даты 

}

{   //Бенчмаркинг
// Для получения наиболее достоверных результатов тестирования производительности 
// весь набор бенчмарков нужно запускать по нескольку раз.
    function diffSubtract(date1, date2) {
        return date2 - date1;
    }
    
    function diffGetTime(date1, date2) {
        return date2.getTime() - date1.getTime();
    }
    
    function bench(f) {
        let date1 = new Date(0);
        let date2 = new Date();
    
        let start = Date.now();
        for (let i = 0; i < 100000; i++) f(date1, date2);
        return Date.now() - start;
    }
    
    let time1 = 0;
    let time2 = 0;
    
    // bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
    for (let i = 0; i < 10; i++) {
        time1 += bench(diffSubtract);
        time2 += bench(diffGetTime);
    }
    
    alert( 'Итоговое время diffSubtract: ' + time1 );
    alert( 'Итоговое время diffGetTime: ' + time2 );
}



{   /*Разбор строки с датой
    Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:

    YYYY-MM-DD – это дата: год-месяц-день.
    Символ "T" используется в качестве разделителя.
    HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
    Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm.
     Если указать просто букву Z, то получим UTC+0. */
// Возможны и более короткие варианты, например, YYYY-MM-DD или YYYY-MM, или даже YYYY.
// Вызов Date.parse(str) обрабатывает строку в заданном формате и возвращает таймстамп 
    let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

    alert(ms); // 1327611110417 (таймстамп)

//Можно тут же создать объект new Date из таймстампа:

    let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

    alert(date);
}


alert(`Загрузка началась ${performance.now()}мс назад`);
// Получаем что-то вроде: "Загрузка началась 34731.26000000001мс назад"
// .26 –- это микросекунды (260 микросекунд)
// корректными являются только первые три цифры после точки, а остальные -- это ошибка точности