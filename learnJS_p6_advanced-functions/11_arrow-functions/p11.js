// У стрелочных функций this берется снаружи функции. Это удобно для создания вложенных функций в методе, например
obj1 = {
    title: "Our Group",
    names: ['John', 'Pete', 'Alice'],
  
    method() {
      this.names.forEach(n => console.log(this.title + n))
    }
  };
  obj1.method();    //Our Group : John ... 
  
  // Эту особенность стрелочной функции можно заменить с помощью bind(), но есть разница:
  // bind создает связанную версию функции
  // Стрелка ничего не привязывает, у нее просто нет this
  
  
  
  // тк у стрелочных функций нет this, их нельзя использовать с new
  const Constructor1 = () => {
    this.name = 'Lexa';
  };
  // const lexa = new Constructor1();      // TypeError: Constructor1 is not a constructor
  
  
  
  // У стрелочной функции нет массива arguments, поэтому она идеально подходит для создания декораторов (оберток):
  // Но arguments это УСТАРЕВШИЙ синтаксис, лучше использовать ...rest
  function decorator1(fn, ms) {
    return function () {                                        // Можно не принимать аргументы - при вызове они попадут в arguments
      setTimeout(() => fn.apply(this, arguments), ms)    // Можно не париться с this - стрелка возьмет this внешней функции
    }
  }
  