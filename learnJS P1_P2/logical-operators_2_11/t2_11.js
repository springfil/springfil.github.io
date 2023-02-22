// че будет 
console.log( null || 2 || undefined );// 2 - первое истинное

// че будет 
console.log(1 && null && 2) // null - первое ложное

//че будет 
console.log(!!('0'||1&&4||true)) // true

// диапозон от 1 до 100 включительно
if (value >= 1 && value <= 100)
// вне этого диапозона 
if (!(value >= 1 && value <= 100))

// че будет? 
if (-1 || 0) alert( 'first' ); // -1 - true
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); // & - приоритет , null||1 - true

//
let userName = prompt('кто ты?','');
if (userName==='биба'){
    let whereIsBoba = prompt('где боба?','');
    
    (whereIsBoba==='тут')?console.log('заходите'):
        (whereIsBoba === ""|| whereIsBoba === null)?console.log('че за игнор?'):
        console.log('я тебя не понимаю');
}
else if (userName===""||userName===undefined) console.log('ну и че ты молчишь');
else console.log('я жду бибу и бобу')