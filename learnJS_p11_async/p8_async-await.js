// Асинхронные функции - сахар над промисами , который позволяет писать асихронный код , как сихронный
// Синтаксис
async function f() {
    return 1;
  }
  
f().then(alert); // 1

//можно и явно вернуть промис
async function f() {
    return Promise.resolve(1);
  }
  
f().then(alert); // 1 



//Await

// работает только внутри async–функций
let value = await promise;

// Ключевое слово заставляет интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. 
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });
  
    let result = await promise; // будет ждать, пока промис не выполнится (*)
  
    alert(result); // "готово!"
  }
  
  f();

// Это более наглядно чем promise.then
// await в обычных функциях - Syntax Error
{
    {
        fetch('/article/promise-chaining/user.json')
        .then(response => response.json())
        .then(user => fetch(`https://api.github.com/users/${user.name}`))
        .then(response => response.json())
        .then(githubUser => new Promise(function(resolve, reject) { // (*)
            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img);

            setTimeout(() => {
            img.remove();
            resolve(githubUser); // (**)
            }, 3000);
        }))
        // срабатывает через 3 секунды
        .then(githubUser => alert(`Закончили показ ${githubUser.name}`));
    }
    // перепишем на async/await
    {
        async function showAvatar() {
            let response = await fetch('/article/promise-chaining/user.json');
            let user = await response.json();

            let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
            let githubUser = await githubResponse.json();

            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img);

            await new Promise((resolve, reject) => setTimeout(resolve, 3000));
            img.remove();

            return githubUser;

        }

        showAvatar();
    }
}

// SyntaxError на верхнем уровне вложенности
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
//вот так можно
(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    ...
  })();


//await работает с «thenable»–объектами
class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve);
      // выполнить resolve со значением this.num * 2 через 1000мс
      setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
  };
  
  async function f() {
    // код будет ждать 1 секунду,
    // после чего значение result станет равным 2
    let result = await new Thenable(1);
    alert(result);
  }
  
  f();


//Асинхронные методы классов
class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(alert); // 1
//Как и в случае с асинхронными функциями, 
//такой метод гарантированно возвращает промис, и в его теле можно использовать await.



//Обработка ошибок 
async function f() {
    await Promise.reject(new Error("Упс!"));
  }
//тоже самое
async function f() {
    throw new Error("Упс!");
  }
// ошибка от промиса мы можем получить не сразу , потому исп обертку try..catch
async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }
  }
  
  f();
// можно закинуть несколько строк в try
async function f() {

    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch(err) {
      // перехватит любую ошибку в блоке try: и в fetch, и в response.json
      alert(err);
    }
  }
  
  f();
//Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected).
async function f() {
    let response = await fetch('http://no-such-url');
  }
  
  // f() вернёт промис в состоянии rejected
  f().catch(alert); // TypeError: failed to fetch // (*)

//async/await отлично работает с Promise.all
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    ...
  ]); //// await будет ждать массив с результатами выполнения всех промисов

