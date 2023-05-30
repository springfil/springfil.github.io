{
  console.log(Error.__proto__ === Function.prototype); // +

  const aboba =
    ReferenceError.__proto__ === Error.prototype.constructor &&
    SyntaxError.__proto__ === Error.prototype.constructor;

  console.log(aboba === true); // +
}



// Когда мы сами хотим выбирать ситуацию, когда нам выкидывать ошибку
//мы создаем польщовательские ошибки через расширение Error
{
  class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = "MyError";
    }
  }

  function foo() {
    try {
      const why = "zopa";
      if (why.length === 4) throw new MyError("MEGAZOPA");
    } catch (zopa) {
      console.log(zopa.message);
    }
  }

  foo(); //MEGAZOPA
}



// обертывание нужно когда мы не хотим проверять во всех местах все генерирумые ошибки каким-то куском кода



{
  class DivideByZeroError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = "DivideByZeroError";
    }
  }

  function divide(a, b) {
    if (b === 0) {
      throw new DivideByZeroError("Деление на ноль запрещено");
    }
    return a / b;
  }

  try {
    divide(5, 0);
  } catch (e) {
    if (e instanceof DivideByZeroError) {
      console.log(e.message);
    } else {
      throw e;
    }
  }
}
