//Промисификация - ерём функцию, которая принимает колбэк и меняем её, чтобы она вместо этого возвращала промис.

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

  document.head.append(script);
}
// использование:
// loadScript('path/script.js', (err, script) => {...})

// ====>>>
let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

// использование:
// loadScriptPromise('path/script.js').then(...)



function promisify(f) {
    return function (...args) { // возвращает функцию-обёртку
      return new Promise((resolve, reject) => {
        function callback(err, result) { // наш специальный колбэк для f
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
  
        args.push(callback); // добавляем колбэк в конец аргументов f
  
        f.call(this, ...args); // вызываем оригинальную функцию
      });
    };
  };
  
// использование:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);



// promisify(f, true), чтобы получить массив результатов
function promisify(f, manyArgs = false) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        function callback(err, ...results) { // наш специальный колбэк для f
          if (err) {
            reject(err);
          } else {
            // делаем resolve для всех results колбэка, если задано manyArgs
            resolve(manyArgs ? results : results[0]);
          }
        }
  
        args.push(callback);
  
        f.call(this, ...args);
      });
    };
  };
  
// использование:
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...)
