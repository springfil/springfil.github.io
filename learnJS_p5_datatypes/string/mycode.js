// В этом задании в нашу функцию testStr первым параметром передается строка (переменная str),
//  а вторым - число (переменная n)
// Вам нужно вернуть из функции символ строки , п
// орядковый номер которого указан в переданном в функцию числе.
const testStr = (str, n) => str[n - 1];


// В этом задании в нашу функцию testStr передаются две строки. 
// Вам нужно вернуть индекс позиции, с которой начинается вхождение второй строки в первую.
//  Верните -1, если второй строки нет в первой.
function testStr(a, b) {
    return a.indexOf(b)
 }


//Write a function that removes the spaces from the string, then return the resultant string.
function noSpace(x){
    return x.replace(/\s/g, '');
  } 

  