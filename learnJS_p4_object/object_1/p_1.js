// примитивы содержат только одно значение 

//пустой "ящик" - обьект 
let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"

// {...} - литерал (способ создания)

// свойство = ключ:значение  
let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
  };
//   В объекте user сейчас находятся два свойства:
//   Первое свойство с именем "name" и значением "John".
//   Второе свойство с именем "age" и значением 30.

//обращение к свойству name обьекта user 
alert( user.name ); // John

//что-то добавить или удалить 
user.['is Admin'] = true; // значение может быть любого типа
delete user.age 

//с const user = {...} - все ясно 


let key = "likes birds";
// то же самое, что и user["likes birds"] = true;
user[key] = true;

// переменная key может быть вычислена во время выполнения кода или зависеть от пользовательского ввода.
let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("Что вы хотите узнать о пользователе?", "name");
  
  // доступ к свойству через переменную
  alert( user[key] ); // John (если ввели "name")


//ВЫЧИСЛЯЕМЫЕ СВ-ва //СЛОВИЛ ТУПНЯК
// [] можем использовать для создрания вычисляемого свойства 
let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert( bag.apple ); // 5, если fruit="apple"

//запись [fruit] означает, что имя свойства необходимо взять из переменной fruit.
//если посетитель введёт слово "apple", то в объекте bag теперь будет лежать свойство {apple: 5}.
//Релевантно 
let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {};
// имя свойства будет взято из переменной fruit
bag[fruit] = 5;

//можно использовать более сложные выражения 
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};



//Св-ва из переменной   //че бл , return создает обьект? 
function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ...другие свойства
    };
  }
  
  let user = makeUser("John", 30);
  alert(user.name); // John

//Вместо name:name мы можем написать просто name:
function makeUser(name, age) {
    return {
      name, // то же самое, что и name: name
      age   // то же самое, что и age: age
      // ...
    };
  }
//Мы можем использовать как обычные свойства, так и короткие в одном и том же объекте:  


// нет ограничений к именам свойтв , они преобразуются к строке
let obj = {
    0: "Тест" // то же самое что и "0": "Тест"
  }; 
// обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
alert( obj["0"] ); // Тест
alert( obj[0] ); // Тест (то же свойство)

// с __proto__ какая-то неведомая хуйня 


//Проверка существования свойства, оператор «in»
let user = {};
alert( user.noSuchProperty === undefined ); // true означает "свойства нет"

//существует вариант "key" in object
let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует

// Если мы опускаем кавычки, это значит, 
// что мы указываем переменную, в которой находится имя свойства. Например:
let user = { age: 30 };
let key = "age";
alert( key in user ); // true, имя свойства было взято из переменной key

// вот зачем он нужен 
let obj = {
    test: undefined
  };
  
  alert( obj.test ); //  выведет undefined, значит свойство не существует?
  alert( "test" in obj ); // true, свойство существует!



//Цикл For in 
for (key in object) { // вместо может быть другое имя, например prop
    // тело цикла выполняется для каждого свойства объекта
  }  


// Порядок свойств объекта 
// свойства упорядочены особым образом: свойства с целочисленными 
// ключами сортируются по возрастанию, остальные располагаются в порядке создания. 
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }
//если ключи не целочисленные, то они перебираются в порядке создания,
let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // добавим ещё одно свойство
  
  // не целочисленные свойства перечислены в порядке создания
  for (let prop in user) {
    alert( prop ); // name, surname, age
  } 
  
  
/*
Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

Они хранят свойства (пары ключ-значение), где:

Ключи свойств должны быть строками или символами (обычно строками).
Значения могут быть любого типа.
Чтобы получить доступ к свойству, мы можем использовать:

Запись через точку: obj.property.
Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
Дополнительные операторы:

Удаление свойства: delete obj.prop.
Проверка существования свойства: "key" in obj.
Перебор свойств объекта: цикл for for (let key in obj).
То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.

В JavaScript есть много других типов объектов:

Array для хранения упорядоченных коллекций данных,
Date для хранения информации о дате и времени,
Error для хранения информации об ошибке.
… и так далее.

У них есть свои особенности, которые мы изучим позже. Иногда люди говорят что-то вроде «тип данных 
Array» или «тип данных Date», но формально они не являются отдельными типами, а относятся к типу 
данных Object. Они лишь расширяют его различными способами.
*/
