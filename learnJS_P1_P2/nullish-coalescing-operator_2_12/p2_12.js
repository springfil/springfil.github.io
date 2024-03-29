//Оператор нулевого слияния (??) 
//a ?? b

//если a определено, то a
//если a не определено, то b. 
//result = (a !== null && a !== undefined) ? a : b;

console.log(undefined??null)// null

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

//Разница между || - ??
// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.


// Использование ?? вместе с && или ||
// без () запрещено

//let x = 1 && 2 ?? 3; // Синтаксическая ошибка

// Пример использования 
birthday: data.birthday ?? "Дата рождения не указана"
phone: data.phone ?? "Номер телефона пока не указан"

//На самом деле, оператор нулевого слияния - это буквально тоже самое, что и тернарный оператор.

data.phone !== null ? data.phone : "Номер телефона не указан"