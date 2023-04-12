// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// С использованием цикла.

function sumTo(n) {
  i = 0;
  let sum = 0;

  while (i <= n) {
    sum += i;
  }

  var i;
  console.log(sum);
}

sumTo(3);

//рекурсия
{
  function sumTo(n) {
    return n === 1 ? 1 : n + sumTo(n - 1);
  }

  console.log(sumTo(3));
}
//арифмит. прогрессия
{
  function sumTo(n) {
    return (n * (n + 1)) / 2;
  }
}



//-------------------
//Факториал через рекурсию
{
  const factorial = (n) => {
    return n === 1 ? 1 : n * factorial(n - 1);
  };
  console.log(factorial(5));
}




//Фибаначос
{
  const Fiba = (n) => {
    return n === 1 ? 1 : Fiba(n - 1) + Fiba(n - 2);
  };
  console.log(Fiba(3));
}




//Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);

{
  //через рекурсию
  function printList(list) {
    console.log(list.value); //текущий

    if (list.next) {
      printList(list.next); // идем дальше
    }
  }

  printList(list);
}
