//Конструкция switch заменяет собой сразу несколько if
/*switch(x) {
    case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}*/


//Если break нет, то выполнение пойдёт ниже по следующим case
//при этом остальные проверки игнорируются.
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
  case 4:
    alert( 'В точку!' );
  case 5:
    alert( 'Перебор' );
  default:
    alert( "Нет таких значений" );
}
//alert( 'В точку!' );
//alert( 'Перебор' );
//alert( "Нет таких значений" );
let a = 1;
switch (a) {
  case 3:
    alert( 'Маловато' );
  case 4:
    alert( 'В точку!' );
    default:
    alert( "Нет таких значений" );// дефолт
  case 5:
    alert( 'Перебор' );// выполнится ,так как нет break
}
// case можно группировать 
// проверка на равенство ===, поэтому важен тип
