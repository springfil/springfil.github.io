// промисы - обработка ошибок

fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message)); 
// к примеру если в каком-то промисе произойдет ошибка, catch ее поймает



//неявный try... catch..
new Promise((resolve, reject) => {
    throw new Error("Ошибка!");
  }).catch(alert); // Error: Ошибка!
//работает также
new Promise((resolve, reject) => {
    reject(new Error("Ошибка!"));
  }).catch(alert); // Error: Ошибка!
//try... catch.. также перехватывает ошибку и превращает её в отклонённый промис в обработчиках
new Promise((resolve, reject) => {
    resolve("ок");
  }).then((result) => {
    throw new Error("Ошибка!"); // генерируем ошибку
  }).catch(alert); // Error: Ошибка!
//вообще это касается всех ошибок 
new Promise((resolve, reject) => {
    resolve("ок");
  }).then((result) => {
    blabla(); // нет такой функции
  }).catch(alert); // ReferenceError: blabla is not defined



//Пробрасывание ошибок 
// Если мы пробросим (throw) ошибку внутри блока .catch, то управление перейдёт к следующему ближайшему обработчику
// ошибок. А если мы обработаем ошибку и завершим работу обработчика нормально, 
// то продолжит работу ближайший успешный обработчик .then.
// the execution: catch -> then
new Promise((resolve, reject) => {
    throw new Error("Ошибка!");
  }).catch(function(error) {
    alert("Ошибка обработана, продолжить работу");
  }).then(() => alert("Управление перейдёт в следующий then"));
//пример с пробросом ошибки
// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

    throw new Error("Ошибка!");
  
  }).catch(function(error) { // (*)
  
    if (error instanceof URIError) {
      // обрабатываем ошибку
    } else {
      alert("Не могу обработать ошибку");
  
      throw error; // пробрасывает эту или другую ошибку в следующий catch
    }
  
  }).then(function() {
    /* не выполнится */
  }).catch(error => { // (**)
  
    alert(`Неизвестная ошибка: ${error}`);
    // ничего не возвращаем => выполнение продолжается в нормальном режиме
  
  });



//как поймать глобальную ошибку
window.addEventListener('unhandledrejection', function(event) {
    // объект события имеет два специальных свойства:
    alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
    alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
  });
  
  new Promise(function() {
    throw new Error("Ошибка!");
  }); // нет обработчика ошибок




//Ошибка в setTimeout
//Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert); 
//неа, колбэк планирования идет в вэб апи 
// ошибка в промисах, это ошибка , которая имеет место во время выполнения промиса 