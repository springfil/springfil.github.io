{
  // Декоратор - функция-обертка, расширяющая функционал того, что она оборачивает
  function sum(a, b) {
    return a + b;
  }

  function cachingDecorator(fn) {
    const cache = new Map();

    return function (...args) {
      if (!cache.has(args)) {
        cache.set(args, fn.call(this, ...args));
      }
      return cache.get(args);
    };
  }

  sum = cachingDecorator(sum);
  console.log(sum(5, 10)); // 15
}
{
  // Если функция, которую декорируют, в своей логике ссылается на `this` (например является методом),
  //то после декорирования эта ссылка будет возвращать undefined тк контекст потеряется.
  // Чтобы исправить это, существуют методы 'привязки' к контексту - `.bind()()` `.apply()` `.call()`

  // `.call(context, ...args)` - вызовет функцию с контекстом context и передаст в нее аргументы args
  const user = { name: "biba", value: 2 };
  const admin = { name: "boba", value: 3 };
  function sendMessage(...phrases) {
    console.log(this.name + phrases.join(" "));
  }
  sendMessage.call(user, ": Hello", "nice", "call");
  sendMessage.call(admin, ": Hello", "nice", "call");

  // `.bind()()` и `.apply()` сделают тоже самое, только bind не вызовет функцию сразу, а apply принимает аргументы псевдомассивом
  sendMessage.bind(user, ": Hello", "nice", "bind")();
  sendMessage.apply(user, [": Hello", "nice", "apply"]);
}
{
  // С помощью `.bind()()` `.apply()` `.call()` можно заимствовать методы любого типа любому типу
  const neArr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 5,
  };
  [].reverse.call(neArr);
  // neArr.reverse();     // TypeError: neArr.reverse is not a function
  console.log(neArr); // { '0': 5, '1': 4, '2': 3, '3': 2, '4': 1, length: 5 }
}
