//Приватные и защищённые методы и свойства
{
//     В объектно-ориентированном программировании свойства и методы разделены на 2 группы:

//     Внутренний интерфейс – методы и свойства, доступные из других методов класса, но не снаружи класса.
//     Внешний интерфейс – методы и свойства, доступные снаружи класса.
}

{
//     В JavaScript есть два типа полей (свойств и методов) объекта:

    // Публичные: доступны отовсюду. Они составляют внешний интерфейс.
    // До этого момента мы использовали только публичные свойства и методы.

    // Приватные: доступны только внутри класса. Они для внутреннего интерфейса.
}



{// Защищённые свойства обычно начинаются с префикса _ - Это не синтаксис языка 
    class CoffeeMachine {
        _waterAmount = 0;
      
        set waterAmount(value) {
          if (value < 0) throw new Error("Отрицательное количество воды");
          this._waterAmount = value;
        }
      
        get waterAmount() {
          return this._waterAmount;
        }
      
        constructor(power) {
          this._power = power;
        }
      
      }
      
      // создаём новую кофеварку
      let coffeeMachine = new CoffeeMachine(100);
      
      // устанавливаем количество воды
      coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды
}



{//Свойство только для чтения «power» - нам нужно создать только геттер, но не сеттер:
    class CoffeeMachine {
        // ...
      
        constructor(power) {
          this._power = power;
        }
      
        get power() {
          return this._power;
        }
      
      }
      
      // создаём кофеварку
      let coffeeMachine = new CoffeeMachine(100);
      
      alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
      
      coffeeMachine.power = 25; // Error (no setter)
}



{// вариант написания вместо классических get/set
    class CoffeeMachine {
        _waterAmount = 0;
      
        setWaterAmount(value) {
          if (value < 0) throw new Error("Отрицательное количество воды");
          this._waterAmount = value;
        }
      
        getWaterAmount() {
          return this._waterAmount;
        }
      }
      
    const coffeeMachine = new CoffeeMachine();
    coffeeMachine.setWaterAmount(100);

    console.log(coffeeMachine.getWaterAmount() === 100); // true
}

{
//     Защищённые поля наследуются
//     Если мы унаследуем class MegaMachine extends CoffeeMachine, ничто не помешает
//      нам обращаться к this._waterAmount или this._power из методов нового класса.
}



{ //У нас может быть два поля одновременно – приватное #waterAmount и публичное waterAmount.
    class CoffeeMachine {

        #waterAmount = 0;
      
        get waterAmount() {
          return this.#waterAmount;
        }
      
        set waterAmount(value) {
          if (value < 0) throw new Error("Отрицательный уровень воды");
          this.#waterAmount = value;
        }
      }
      
      let machine = new CoffeeMachine();
      
      machine.waterAmount = 100;
      alert(machine.#waterAmount); // Error
}

{//Но если мы унаследуем от CoffeeMachine, то мы не получим прямого доступа к #waterAmount.
    // Мы будем вынуждены полагаться на геттер/сеттер waterAmount:
    class User {
        ...
        sayHi() {
          let fieldName = "name";
          alert(`Hello, ${this[fieldName]}`);
        }
      }

    // С приватными свойствами такое невозможно: this['#name'] не работает.
    // Это ограничение синтаксиса сделано для обеспечения приватности.  
}

