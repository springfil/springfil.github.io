{//Деструктурирующее присваивание
// Но когда мы передаём их в функцию []{}, то ей может понадобиться не объект/массив целиком,
// а элементы по отдельности.

// Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» 
// массивы или объекты в несколько переменных, так как иногда они более удобны.
}

{
//Деструктуризация массива

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];
// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor

{let [firstName, surname] = "Ilya Kantor".split(' ');
alert(firstName); // Ilya
alert(surname);  // Kantor
}
{
//его задача – только скопировать нужные значения в переменные.
// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
}
{
//пропуск элементов
/ второй элемент не нужен
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul
}
{
//любой перебираемый обьект с правой стороны
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
}
{
//Присваивайте чему угодно с левой стороны
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya
alert(user.surname); // Kantor
}
{
//Цикл с .entries()
let user = {
    name: "John",
    age: 30
  };
  
  // цикл по ключам и значениям
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, затем age:30
  }


//------------ тоже и для MAP
let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, затем age:30
}
}
{
//Трюк обмена переменных
let guest = "Jane";
let admin = "Pete";

// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (успешно заменено!)
}
{
// Остаточные переменные RESt {_,_,...rest}
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Дальнейшие элементы нигде не присваиваются

//---------
let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// теперь titles = ["Consul", "of the Roman Republic"]
}
{
//Значения по умолчанию
let [firstName, surname] = [];
alert(firstName); // undefined
alert(surname); // undefined
//-----
// prompt запустится только для surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name);    // Julius (из массива)
alert(surname); // результат prompt
//Обратите внимание, prompt будет запущен только для пропущенного значения (surname).
}
}



{//Деструктуризация объекта
{let {var1, var2} = {var1:…, var2:…}   
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

//Порядок не имеет значения. Вот так – тоже работает:
}
{
//Присвоение переменной с другим названием
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // { sourceProperty: targetVariable }
  let {width: w, height: h, title} = options;
  
  // width -> w
  // height -> h
  // title -> title
  
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200   
}
{
//Для потенциально отсутствующих свойств мы можем установить значения по умолчанию, используя "=",
let options = {
    title: "Menu"
  };
  
  let {width = 100, height = 200, title} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200  
}
{
//функции. Они выполнятся, если значения отсутствуют.
let options = {
    title: "Menu"
  };
  
  let {width = prompt("width?"), title = prompt("title?")} = options;
  
  alert(title);  // Menu
  alert(width);  // (результат prompt)
}
{
//Мы также можем совмещать : и =:
let options = {
    title: "Menu"
  };
  
  let {width: w = 100, height: h = 200, title} = options;
  
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200
}
{
//Если у нас есть большой объект с множеством свойств, можно взять только то, что нужно:
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // взять только title, игнорировать остальное
  let { title } = options;
  
  alert(title); // Menu
}
{
//остаток обьекта
let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  
  // title = свойство с именем title
  // rest = объект с остальными свойствами
  let {title, ...rest} = options;
  
  // сейчас title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100
}
{
//СКОБАЧКИ СКОБАЧКИ СКОБАЧКИ СКОБАЧКИ СКОБАЧКИ 
let title, width, height;

// сейчас всё работает
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu
}
}



{
//Вложенная деструктуризация
{//мы можем использовать более сложные шаблоны с левой стороны, чтобы извлечь более глубокие свойства.
    let options = {
        size: {
          width: 100,
          height: 200
        },
        items: ["Cake", "Donut"],
        extra: true
      };
      
      // деструктуризация разбита на несколько строк для ясности
      let {
        size: { // положим size сюда
          width,
          height
        },
        items: [item1, item2], // добавим элементы к items
        title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
      } = options;
      
      alert(title);  // Menu
      alert(width);  // 100
      alert(height); // 200
      alert(item1);  // Cake
      alert(item2);  // Donut
//Заметим, что переменные для size и items отсутствуют, так как мы взяли сразу их содержимое.
}
}



{
//Умные параметры функций
//Полный синтаксис – такой же, как для деструктурирующего присваивания:3
function({
    incomingProperty: varName = defaultValue
    ...
  })

//---------

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width присваиваем в w
    height: h = 200, // height присваиваем в h
    items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }
  
  showMenu(options);
{
//
showMenu({}); // ок, все значения - по умолчанию

showMenu(); // так была бы ошибка
}
{
//Мы можем исправить это, сделав {} значением по умолчанию для всего объекта параметров:
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
  }
  
  showMenu(); // Menu 100 200
}
}