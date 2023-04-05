//Object.keys, values, entries
// Методы поддерживаются для структур:
// Map
// Set
// Array
// Простые объекты также можно перебирать похожими методами, но синтаксис немного отличается.

// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].



// Синтаксис вызова	     //map.keys()	         //Object.keys(obj), не obj.keys()
// Возвращает	        //перебираемый объект	//«реальный» массив

let user = {
    name: "John",
    age: 30
  };

  Object.keys(user) // ["name", "age"]
  Object.values(user) // ["John", 30]
  Object.entries(user) // [ ["name","John"], ["age",30] ]


// Пример использования Object.values ​​для перебора значений свойств в цикле:
let user = {
    name: "John",
    age: 30
  };
  
  // перебор значений
  for (let value of Object.values(user)) {
    alert(value); // John, затем 30
  }


//   Object.keys/values/entries игнорируют символьные свойства
//   ! Object.getOwnPropertySymbols, возвращающий массив только символьных ключей
//   Также, существует метод Reflect.ownKeys(obj), который возвращает все ключи.



//ТРАНСФОРМАЦИЯ ОБЬЕКТА
// Если мы хотели бы их применить, то можно использовать Object.entries с последующим вызовом Object.fromEntries:

// Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// На нём вызываем методы массива, например, map.
// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  alert(doublePrices.meat); // 8

