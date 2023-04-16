// Глобальный объект (globalThis) - хранилище всех глобальных переменных и функций, доступных в любом месте кода
console.log(globalThis);                                      // Output: {global object}
globalThis.console.log('console.log св-во globalThis');       // Output: 'console.log св-во globalThis'



// В браузере глобальные функции и переменные, объявленные через `var` становятся св-ми глобального объекта
var gVar = 100;
console.log(globalThis.gVar);           // Output: 100 (но только в браузере)

// То же в браузере самое касается Function Declaration (в node.js )
function gFunc() {
  return 'zopa'
}
// console.log(globalThis.gFunc);     // Output: 'zopa' (но только в браузере)

// В целом, это устаревший синтаксис, поэтому пользоваться им не надо.
// При необходимости записать что-то как св-во глобала, можно через let/const как в обычный объект:
globalThis.prop = 'it\'s global prop';
console.log(prop);                      // Output: it's global prop
console.log(globalThis.prop);           // Output: it's global prop



// В глобальном объекте содержатся все функции языка => можно проверять их наличие и пользоваться полифилом:
if (!globalThis.Promise) {
  globalThis.Promise = 'сюда пишется полифил';
}