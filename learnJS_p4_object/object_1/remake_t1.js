// объект коробка имеющая свойства и определенный тип 
// свойства - пара ключ:значение 

// прошелся по теории 
let shoppingCard = prompt('что купить','');
let value = +prompt('сколько купить','')
let moneyOn = {
    [shoppingCard + 'today'] : value,
    allMoney : '1350 рублей'
};
console.log(moneyOn);
console.log(moneyOn[shoppingCard + 'today']);
//console.log(money[shoppingCardtoday])//ошибка
let key = prompt('сколько денег у меня осталось?' , 'allMoney');
console.log(moneyOn[key]);

moneyOn['Биба и Боба'] = 'Два долбаеба';
console.log('Биба и Боба' in moneyOn);

for(let peremennaia in moneyOn){
    console.log(peremennaia);
    console.log(moneyOn[peremennaia]);
}



// Создайте объект user с ключами 'name', 'surname', 'patronymic' и
//  какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
let obj = {
    'name': 1,
    'surname': 2, 
    'patronymic': 3,
}
console.log(obj.name + ' ' + obj.surname + ' ' + obj.patronymic );

// Создайте объект date с ключами 'year', 'month' и 'day' и значениями,
//  соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.
let date = {
    year: '2023-',
    month: '03-',
    day: '07',
}
console.log(date.year+date.month+date.day);


// Мы можем писать без кавычек не все ключи объектов, а только те,
//  которые удовлетворяют следующим ограничениям: они не могут начинаться с цифры 
//  и не могут содержать внутри себя дефис, пробел и тому подобные вещи.


//Исправьте ошибки, допущенные в следующем коде:
let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj.1a);//console.log(obj['1a']);
console.log(obj.b2);
console.log(obj.c-c);//console.log(obj.['c-c']);
console.log(obj.d 4);//console.log(obj.['d 4'])
console.log(obj.e5);

// Получите массив ключей следующего объекта и его длину:
let obj = {x: 1, y: 2, z: 3};
let arr = Object.keys(obj);

console.log(arr);
console.log(arr.length);

//Дана переменная key, в которой хранится один из ключей 
//нашего объекта. Выведите с помощью этой переменной соответствующий элемент объекта
let obj = {x: 1, y: 2, z: 3};
let key = 'z';

console.log(obj[key]);


//При обращению к элементу объекта через квадратные скобки
// имена ключей нужно брать в кавычки, а имена переменных - нет.

//Исправьте ошибку, допущенную в следующем коде:
let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj.prop);// console.log(obj[prop])
console.log(obj['prop']);// console.log(obj[prop])

//Сделайте так, чтобы ключи объекта брались из этих переменных.
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj = {
    [key1]: 1,
	[key2]: 2,
	[key3]: 3
}