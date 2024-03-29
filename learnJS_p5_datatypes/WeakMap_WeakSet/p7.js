//движок JavaScript хранит значения в памяти до тех пор, пока они достижимы
let aboba = { a: 1};
aboba = null ; // обьект удален
//---------------
let john = { name: "John" };
let array = [ john ];
john = null; // перезаписываем ссылку на объект
// объект john хранится в массиве, поэтому он не будет удалён сборщиком мусора
// мы можем взять его значение как array[0]


// и ХОПА
//Аналогично, если мы используем объект как ключ в Map, то до тех пор, пока существует Map,
// также будет существовать и этот объект. Он занимает место в памяти и не может быть удалён сборщиком мусора.
//сахарок
let john = { name: "John" };
let map = new Map();
map.set(john, "...");
john = null; // перезаписываем ссылку на объект
// объект john сохранён внутри объекта `Map`,
// он доступен через map.keys()


//соль
// WeakMap – принципиально другая структура в этом аспекте. 
// Она не предотвращает удаление объектов сборщиком мусора, когда эти объекты выступают в качестве ключей.



// WeakMap
// Первое его отличие от Map в том, что ключи в WeakMap должны быть объектами, а не примитивными значениями:
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // работает (объект в качестве ключа)

// нельзя использовать строку в качестве ключа
weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект
//-------------
// Теперь, если мы используем объект в качестве ключа и если больше нет ссылок на этот объект, 
// то он будет удалён из памяти (и из объекта WeakMap) автоматически.
//-------------
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // перезаписываем ссылку на объект
// объект john удалён из памяти!



// WeakMap не поддерживает перебор и методы keys(), values(), entries(), 
// так что нет способа взять все ключи или значения из неё.
// В WeakMap присутствуют только следующие методы:

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)



//ЗАЧЕМ ОНО НАМ
weakMap.set(john, "секретные документы");
// если john умрёт, "секретные документы" будут автоматически уничтожены
// счетчик посещений пока юзер тута , потом его данные нам не нужны
// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: пользователь => число визитов

// увеличиваем счётчик
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
//--------
//А вот другая часть кода, возможно, в другом файле, которая использует countUser:
//-------
// 📁 main.js
let john = { name: "John" };
countUser(john); //ведём подсчёт посещений
// пользователь покинул нас
john = null;
//-----
//Теперь объект john должен быть удалён сборщиком мусора, 
//но он продолжает оставаться в памяти, так как является ключом в visitsCountMap.
//------
// Проблемы бескночного роста коллекции можно избежать, если использовать WeakMap:
// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // map: пользователь => число визитов
// увеличиваем счётчик
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}



//кеширование  weakmap/ vs map
// 📁 cache.js
let cache = new Map();

// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* тут какие-то вычисления результата для объекта */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// Теперь используем process() в другом файле:

// 📁 main.js
let obj = {/* допустим, у нас есть какой-то объект */};

let result1 = process(obj); // вычислен результат

// ...позже, из другого места в коде...
let result2 = process(obj); // ранее вычисленный результат взят из кеша

// ...позже, когда объект больше не нужен:
obj = null;

alert(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)

//-----
//------
// кэш с WeakMap
// 📁 cache.js
let cache = new WeakMap();

// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* вычисляем результат для объекта */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* какой-то объект */};

let result1 = process(obj);
let result2 = process(obj);

// ...позже, когда объект больше не нужен:
obj = null;

// Нет возможности получить cache.size, так как это WeakMap,
// но он равен 0 или скоро будет равен 0
// Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются



//WeakSet
// Коллекция WeakSet ведёт себя похоже:

// Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
// Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
// Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.

// Будучи «слабой» версией оригинальной структуры данных, она тоже служит в качестве дополнительного хранилища.
//  Но не для произвольных данных, а скорее для значений типа «да/нет». 
//  Присутствие во множестве WeakSet может что-то сказать нам об объекте.

//Например, мы можем добавлять пользователей в WeakSet для учёта тех, кто посещал наш сайт:
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
alert(visitedSet.has(john)); // true

// проверим, заходила ли Mary?
alert(visitedSet.has(mary)); // false

john = null;

// структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet)


//СУТЬ ---  быть дополнительным хранилищем данных для объектов, управляемых из каких-то других мест в коде.
