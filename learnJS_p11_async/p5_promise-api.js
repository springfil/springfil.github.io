// Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами.
// Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка,
// результаты остальных промисов будут игнорироваться.
Promise.all([//возвразает новый промис
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(alert); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива
// важен порядок

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  // Преобразуем каждый URL в промис, возвращённый fetch
  let requests = urls.map(url => fetch(url));
  
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));

//пример с получением инфы по логинам
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // все промисы успешно завершены
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
    }

    return responses;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then(responses => Promise.all(responses.map(r => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then(users => users.forEach(user => alert(user.name)));

//Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, 
//немедленно завершается с этой ошибкой.
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert); // Error: Ошибка!

// если один из нескольких fetch провал- то другие выполняются , тем не менее Promise.all за ними уже не смотрит  

//принимает не только промисы 
Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]).then(alert); // 1, 2, 3



// Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
// status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
// value – результат, если успешно или reason – ошибка, если нет.
let promise = Promise.allSettled(iterable);

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
    return results
  }).then(results => console.log(results))

//Массив results в строке (*) будет таким:
[
    {status: 'fulfilled', value: ...объект ответа...},
    {status: 'fulfilled', value: ...объект ответа...},
    {status: 'rejected', reason: ...объект ошибки...}
  ]

                      //ТАМ КОРОЧЕ ЕСТЬ ПОЛИФИЛ



// Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом,
// остальные игнорируются.
let promise = Promise.race(iterable);

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1



// Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, 
// который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, 
// AggregateError становится ошибкой Promise.any.
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

// Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise 
// будет отклонён с помощью AggregateError – специального объекта ошибок, который хранит 
// все ошибки промисов в своём свойстве errors.
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
  ]).catch(error => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ошибка!
    console.log(error.errors[1]); // Error: Ещё одна ошибка!
  });



// Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.
let promise = new Promise(resolve => resolve(value));

//Этот метод используют для совместимости: когда ожидается, что функция возвратит именно промис.
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}


// Promise.reject(error) – возвращает промис с ошибкой error
let promise = new Promise((resolve, reject) => reject(error));


