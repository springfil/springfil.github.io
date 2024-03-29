// Короче, есть 
// обьекты для хранения именованных коллекций 
// массивы - для упорядоченных 

// Map позволяет хранить ключи любого типа 
// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.


let ex = new Map();
ex.set("1", "str1");
.set(1, "num1");
.set(true, "bool1"); 

alert(map.get("1")); // "str1" 

// в Map ключи не приводятся к строкам (поэтому могут быть использованы любые знач)
//если ебануть ex[key]= 'что-то', то экземпляр уже будет обьектом, поэтому надо юзать методы 

let aboba = {name : 'biba'};
let visitCountMap = new Map();
visitCountMap.set(aboba, 10);
alert (visitCountMap.get(aboba)) // 10 

//-------
//Заменим map на obj 
let biba = { name: "Biba" };
let boba = { name: "Boba" };

let visitsCountObj = {}; // попробуем использовать объект

visitsCountObj[biba] = 234; // пробуем использовать объект ben в качестве ключа
visitsCountObj[boba] = 123; // пробуем использовать объект john в качестве ключа, при этом объект ben будет замещён

// Вот что там было записано!
alert( visitsCountObj["[object Object]"] ); // 123

//Чтобы сравнивать ключи, объект Map использует алгоритм SameValueZero



 //Перебор Map
// Для перебора коллекции Map есть 3 метода:

// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида 
// [ключ, значение], этот вариант используется по умолчанию в for..of.
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);
  
  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
  }
  
  // перебор по значениям (числа)
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  
  // перебор по элементам в формате [ключ, значение]
  for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
  }
//Используется порядок вставки



//Object.entries: Map из Object
// При создании Map мы можем указать массив 
// (или другой итерируемый объект) с парами ключ-значение для инициализации, как здесь:
// массив пар [ключ, значение]
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);
  
  alert( map.get('1') ); // str1
//  Если у нас уже есть обычный объект, и мы хотели бы создать Map из него, то поможет встроенный метод
// Object.entries(obj), который получает объект и возвращает массив пар ключ-значение для него, 
let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  alert( map.get('name') ); // John


//   Object.fromEntries: Object из Map
// Есть метод Object.fromEntries, который делает противоположное:
//  получив массив пар вида [ключ, значение], он создаёт из них объект:
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  // prices = { banana: 1, orange: 2, meat: 4 }
  
  alert(prices.orange); // 2

//   Вот как это сделать:

  let map = new Map();
  map.set('banana', 1);
  map.set('orange', 2);
  map.set('meat', 4);
  
  let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)
  
  // готово!
  // obj = { banana: 1, orange: 2, meat: 4 }
  alert(obj.orange); // 2

// let obj = Object.fromEntries(map); // убрать .entries()
// Это то же самое, так как Object.fromEntries ожидает перебираемый объект в качестве аргумента, 
// не обязательно массив. А перебор map как раз возвращает пары ключ/значение, 
// так же, как и map.entries(). Так что в итоге у нас будет обычный объект с теми же ключами/значениями,
// что и в map.



// Объект Set – это особый вид коллекции: «множество» значений (без ключей), 
// где каждое значение может появляться только один раз.
//---------
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.
//--------------
// Основная «изюминка» – это то, что при повторных вызовах set.add() с одним и тем же значением ничего не происходит, 
// за счёт этого как раз и получается, что каждое значение появляется один раз.
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (потом Pete и Mary)
}

// arr.find - альтернатива / производительность ниже/ по всему массиву для проверки элементов 



// Перебор объекта Set
// Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach:
let set = new Set(["апельсин", "яблоко", "банан"]);
for (let value of set) alert(value);
// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});


// Set имеет те же встроенные методы, что и Map:
// //---
// set.keys() – возвращает перебираемый объект для значений,
// set.values() – то же самое, что и set.keys(), присутствует для обратной совместимости с Map,
// set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.