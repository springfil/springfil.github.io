//Промисы - синтаксис

{
  {
    let promise = new Promise(function(resolve, reject) {
      // функция-исполнитель (executor)
      // "певец"
    });
    
    typeof promise // object
    // executor - запускается автоматически при создании промиса
  }

  {// колбэки
    // resolve(value) — если работа завершилась успешно, с результатом value. 
    //-> state: fulfiled -> result: value
    
    // reject(error) — если произошла ошибка, error – объект ошибки.-> state: fulfiled
    //-> state: rejected -> result: error (это внутренние свойства)
  }

}



//У промиса может быть только либо один результат, либо ошибка
{
  let promise = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
  });
}
//!Вызывайте reject с объектом Error

//resolve/reject могут быть вызваны мнгновенно без асинхронщины в executor



// Потребители: then, catch - подписота для функций фанатов
{//магия then - обрабочка результат(не только(ниже блок))
  {
    promise.then(
      function(result) { /* обработает успешное выполнение */ },
      function(error) { /* обработает ошибку */ }
    );
  }
//ПРИМЕРы
  {//-> state: fulfiled -> result: "Done"
    let promise = new Promise(function(resolve, reject) {
      setTimeout(() => resolve("done!"), 1000);
    });
    
    // resolve запустит первую функцию, переданную в .then
    promise.then(
      result => alert(result), // выведет "done!" через одну секунду
      error => alert(error) // не будет запущена
    );
  }

  {//-> state: rejected -> result: Error("Whoops!")
    let promise = new Promise(function(resolve, reject) {
      setTimeout(() => reject(new Error("Whoops!")), 1000);
    });
    
    // reject запустит вторую функцию, переданную в .then
    promise.then(
      result => alert(result), // не будет запущена
      error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
    );
  }

  {//если нужен только результат успешного выполнения задачи
    let promise = new Promise(resolve => {
      setTimeout(() => resolve("done!"), 1000);
    });
    
    promise.then(alert); // выведет "done!" спустя одну секунду
  }
}


{
  {//обработка ошибок
    // then(null, errorHandlingFunction). 
    // catch(errorHandlingFunction)
  }

  {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Ошибка!")), 1000);
    });
    
    // .catch(f) это то же самое, что promise.then(null, f)
    promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду
  }
}


{//Идея finally состоит в том, чтобы настроить обработчик для выполнения очистки/доведения после завершения предыдущих операций.
  {
    new Promise((resolve, reject) => {
      /* сделать что-то, что займёт время, и после вызвать resolve или может reject */
    })
      // выполнится, когда промис завершится, независимо от того, успешно или нет
      .finally(() => остановить индикатор загрузки)
      // таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
      .then(result => показать результат, err => показать ошибку)
  }

  {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve("value"), 2000);
    })
      .finally(() => alert("Промис завершён")) // срабатывает первым
      .then(result => alert(result)); // <-- .then показывает "value"
  }
  
  {
    new Promise((resolve, reject) => {
      throw new Error("error");
    })
      .finally(() => alert("Промис завершён")) // срабатывает первым
      .catch(err => alert(err));  // <-- .catch показывает ошибку
  }
  
  {
    // Обработчик finally не получает результат предыдущего обработчика (у него нет аргументов). 
    //Вместо этого работает как очко - прокидывает результат подходящему обработчику.
    
    // Если обработчик finally возвращает что-то, это игнорируется.
    // Когда finally выдает ошибку, выполнение переходит к ближайшему обработчику ошибок.
  }
}
