//Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }
//Сделайте два варианта функции checkAge:
//Используя оператор ?
function checkAge(age){
    return (age>18)?true:
    confirm('Родители разрешили?');
}
//Используя оператор ||
function checkAge(age){
    return(age>18)||confirm('Родители разрешили?');
}


//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function getMin(a,b){
    return (a<b)?a:b;
}
getMin(2,5)


//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
function pow(x,n){
    let result = x;

    for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = +prompt('x','');
let n = +prompt('n','');

(n<1)?console.log("используйте натуральное число n"):
console.log(pow(x,n))