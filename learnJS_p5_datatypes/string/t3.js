// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }




//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

//Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
 
//РЕШЕНИЕ
function checkSpam(str){
    let a = str.toLowCase();
    
    return a.includes('viagra') || lowerStr.includes('xxx');
}



// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
// если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, 
// либо, если необходимо, усечённая строка.
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

  
  
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//  Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять 
//  числовое значение и возвращать его.
function extractCurrencyValue(str) {
    return +str.slice(1);
  }