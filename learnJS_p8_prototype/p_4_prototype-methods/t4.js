{
  // TASK1
  // let dictionary = Object.create(null);
  // // ваш код, который добавляет метод dictionary.toString
  // // добавляем немного данных
  // dictionary.apple = "Apple";
  // dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
  // // только apple и __proto__ выведены в цикле
  // for(let key in dictionary) {
  //   alert(key); // "apple", затем "__proto__"
  // }
  // // ваш метод toString в действии
  // alert(dictionary); // "apple,__proto__"
}

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

{
  //task2

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype.sayHi = function () {
    alert(this.name);
  };

  let rabbit = new Rabbit("Rabbit");
  //Все эти вызовы делают одно и тоже или нет?

  rabbit.sayHi(); // Rabbit
  Rabbit.prototype.sayHi();
  Object.getPrototypeOf(rabbit).sayHi();
  rabbit.__proto__.sayHi();
}


