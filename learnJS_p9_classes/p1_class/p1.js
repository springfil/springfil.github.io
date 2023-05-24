{ //базовый синтаксис класса
    {
        class MyClass {
            // методы класса
            constructor() { ... }
            method1() { ... }
            method2() { ... }
            method3() { ... }
            ...
          }
    }
    // методы не разделяются запятой
    {
        class Abobus{

            constructor(name){
                this.name = name;
            }

            say(){
                console.log(this.name + " -абобус")
            }
        }

        let aboba = new Abobus('Beluga');
        aboba.say(); //Beluga -абобус

        console.log(typeof Abobus) //function
        console.log(Abobus === Abobus.prototype.constructor.prototype.constructor) // true
        console.log(Abobus.prototype.say) // ƒ say()
        console.log(Object.getOwnPropertyNames(Abobus.prototype)) //["constructor", "say"]
    }

}



{//отличие классов

    // - Во-первых, функция, созданная с помощью class, 
    // помечена специальным внутренним свойством [[IsClassConstructor]]: true.

    // - В отличие от обычных функций, конструктор класса не может быть вызван без new:

    // - Методы класса являются неперечислимыми. ENUMARABLE : FALSE для всех методов в "prototype"

    // - Классы всегда используют use strict

}



{ //Class Expression
    {
        let Aboba = class Bad{
            say(){
                console.log(Bad)
            }
        };

        new Aboba().say() // выводит вот это вот все
        //Bad name извне класса недоступен 
    }

    {// динамическое создрания по запросу
        function makeClass(phrase) {
            // объявляем класс и возвращаем его
            return class {
              sayHi() {
                alert(phrase);
              };
            };
          }
          
          // Создаём новый класс
          let User = makeClass("Привет");
          
          new User().sayHi(); // Привет
    }
}



{//get set etc
    {
        class Aboba{

            constructor(age){
                this.age = age;
            }

            get age() {
                return this._age;
            }

            set age(value){
                if (value < 20){
                    console.log('ты мал');
                    return;
                }
                this._age = value;
            }
        }

        let aboba = new Aboba(27);
        console.log(aboba.age); //27

        zopa = new Aboba(18); // ты мал
    }

    { // можно юзать вычисляемые свойства
        ['say' + 'Hi']() {
            alert("");
          }
    }

    {//При объявлении класса геттеры/сеттеры создаются на Aboba.prototype, вот так:
        Object.defineProperties(Aboba.prototype, {
            name: {
              get() {
                return this._name
              },
              set(name) {
                // ...
              }
            }
          });
    }
}



{//Свойства классов 

    class User {
        name = "Аноним";
      
        sayHi() {
          alert(`Привет, ${this.name}!`);
        }
      }
      
      new User().sayHi();

    //   Свойство name не устанавливается в User.prototype. 
    //   Вместо этого оно создаётся оператором new перед запуском конструктора, это именно свойство объекта.
}