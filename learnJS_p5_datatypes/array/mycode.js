// В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. 
// Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.

function testArray(a, b) {
    let sumA=0;
    let sumB=0;
    for (i=0;i<a.length;i++){
    sumA+=a[i];
    }
    for (i=0;i<b.length;i++){
    sumB+=b[i];
    }
    return sumA+sumB
}

// В этом задании в нашу функцию testArray передаются две строки случайной длины и содержания. 
// Вам нужно составить из символов этих строк один массив (каждый символ строки становится отдельным элементом массива),
//  затем добавить первым элементом  массива текстовое значение "Иванов", и вернуть из функции все элементы в обратном порядке, 
//  преобразовав в строку. Обратите внимание, что в обратном порядке нужно переставить элементы внутри массива, а данные внутри элементов инвертировать не нужно!
function testArray(a, b) {
    return a.concat(b).split('').reverse().join('').concat('Иванов')
}

// Дано положительное число n. Переведите его в двоичную систему счисления.
function Div2(n) {
    var x = [];
    for (div=n; div/2>0; div =Math.floor(div/2)) {
        if (div%2) {
            x.unshift(1);
        } else {
            x.unshift(0);
        }
    }
    return x.join('');
}



// напишите функцию shortcut(string) которая принимает строку, убирает 
//из неё гласные a,e,i,o,u (только если они не заглавные) и возвращает то что осталось в виде строки
function shortcut(str){
    let stackCut = ['a','e','i','o','u'];
    let strCut = str.split('');
    let result = [];
    
    for(let i = 0; i < strCut.length; i ++){ // для всех элементов массива str
      if(!stackCut.includes(strCut[i]))
        result.push(strCut[i])
      // for( let j = 0; j < stackCut.length; j++ ){
      //   if (strCut[i] === stackCut[j]) 
      // }
    }
    return result.join('')
  }
  console.log(shortcut('hello'));
  console.log(shortcut('HELLO'));
  console.log(shortcut('How Are You'));


// Динамичекая длина??? 
let a = [1, 2, 3];

a.length = 1;
console.log(a);

a.length = 5;
console.log(a); // заполнит empty (шо это за сущность)
