// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

//Объект в формате JSON имеет несколько важных отличий от объектного литерала:
// ТОЛЬКО ДВОЙНЫЕ КАВЫЧКИ

/*
JSON поддерживает следующие типы данных:

Объекты { ... }
Массивы [ ... ]
Примитивы:
строки,
числа,
логические значения true/false,
null. */



//JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.
// Свойства-функции (методы).
// Символьные ключи и значения.
// Свойства, содержащие undefined.

let user = {
    sayHi() { // будет пропущено
      alert("Hello");
    },
    [Symbol("id")]: 123, // также будет пропущено
    something: undefined // как и это - пропущено
  };
  
  alert( JSON.stringify(user) ); // {} (пустой объект)



//Важное ограничение: не должно быть циклических ссылок.
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  
  meetup.place = room;       // meetup ссылается на room
  room.occupiedBy = meetup; // room ссылается на meetup
  
  JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON

// тут помогает replacer let json = JSON.stringify(value, [replacer, space])
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
  };
  
  room.occupiedBy = meetup; // room ссылается на meetup
  
  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}

//хоба все свойства кроме room.occupiedBy

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
  };
  
  room.occupiedBy = meetup; // room ссылается на meetup
  
  alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
  /*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */

//replacer мы можем использовать функцию, а не массив.

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
  };
  
  room.occupiedBy = meetup; // room ссылается на meetup
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
  }));
  
  /* пары ключ:значение, которые приходят в replacer:
  :             [object Object]
  title:        Conference
  participants: [object Object],[object Object]
  0:            [object Object]
  name:         John
  1:            [object Object]
  name:         Alice
  place:        [object Object]
  number:       23
  occupiedBy: [object Object]
  */



//Пользовательский «toJSON»
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)), // встроенный JSON
    room
  };
  
  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */



//REVIEVER
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // 30 - теперь работает!
//Кстати, это работает и для вложенных объектов: