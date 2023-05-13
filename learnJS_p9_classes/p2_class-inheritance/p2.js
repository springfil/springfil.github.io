{//наследование классов - расширения класса другим суперклассом
    { //class Child extends Parent
        class Car{
            constructor(name){
                this.speed = 0;
                this.name = name;
            }

            zopa(speed){
                this.speed = speed;
                console.log(`${this.name} разгоняется до ${this.speed}км/ч`)ж
            }
        }

        class MonsterTrack extends Car{
            information(){
                console.log(`${this.name} - топ тачка`);
            }
        }

        let monster = new MonsterTrack('Бизон');
        monster.speed(140); //Бизон разгоняется до 140км/ч
        monster.information(); // Бизон - топ тачка
    }

    {//Пример генерации родительского класса
        function f(phrase) {
            return class {
              sayHi() { alert(phrase); }
            };
          }
          
          class User extends f("Привет") {}
          
          new User().sayHi(); // Привет
    }
}



{//Переопределение методов
    {
        class MonsterTrack extends Car{
            //использует собственный метод
            zopa(speed){
                this.speed = speed;
                console.log(`${this.speed}км/ч - предел для этой тачки`)ж
            }
        }

        
    }

    {
        // super.method(...) вызывает родительский метод.
        // super(...) для вызова родительского конструктора (работает только внутри нашего конструктора).
    }

    {
        class MonsterTrack extends Car{
            zopa(speed){
                super.zopa(speed);
                console.log(`${this.speed}км/ч - предел для этой тачки`)
            }
        } 
        let monster = new MonsterTrack('Бизон');
        monster.zopa(140);// Бизон разгоняется до 140км/ч // 140км/ч - предел для этой тачки
    }

    {//у стрелок нет super он берется из внешней функции
        class Rabbit extends Animal {
            stop() {
              setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
            }
          }
    }
}



{//Переопределение конструктора
    {//Согласно спецификации, если класс расширяет другой класс и не имеет конструктора,
     // то автоматически создаётся такой «пустой» конструктор:
     class MonsterTrack extends Car {
        // генерируется для классов-потомков, у которых нет своего конструктора
        constructor(...args) {
          super(...args);
        }
      }
    }

    {
        // Конструкторы в наследуемых классах должны обязательно вызывать super(...), 
        // и (!) делать это перед использованием this.
    }

    {
        class Car{
            constructor(name){
                this.speed = 0;
                this.name = name;
            }
        }

        class MonsterTrack extends Car{
            constructor(name, color){
                super(name);
                this.color = color;
            }
        }

        let monster = new MonsterTrack('Бизон','черный');
        console.log(monster.name, monster.color); // Бизон черный

    }
}



{//[[HomeObject]]
    {
        // Когда функция объявлена как метод внутри класса или объекта, её свойство 
        // [[HomeObject]] становится равно этому объекту.
        //  Затем super использует его, чтобы получить прототип родителя и его методы.
    }

    {// на примере обьектов
        let animal = {
            name: "Животное",
            eat() {         // animal.eat.[[HomeObject]] == animal
              alert(`${this.name} ест.`);
            }
          };
          
          let rabbit = {
            __proto__: animal,
            name: "Кролик",
            eat() {         // rabbit.eat.[[HomeObject]] == rabbit
              super.eat();
            }
          };
          
          let longEar = {
            __proto__: rabbit,
            name: "Длинноух",
            eat() {         // longEar.eat.[[HomeObject]] == longEar
              super.eat();
            }
          };
          
          // работает верно
          longEar.eat();  // Длинноух ест.
    }

    {
        // Единственное место в языке, где используется [[HomeObject]] – это super. 
        // Поэтому если метод не использует super, то мы все ещё можем считать его свободным и к
        // опировать между объектами. А вот если super в коде есть, то возможны побочные эффекты.
    }

    {// просто запомнить
        let animal = {
            eat: function() { // намеренно пишем так, а не eat() { ...
              // ...
            }
          };
          
          let rabbit = {
            __proto__: animal,
            eat: function() {
              super.eat();
            }
          };
          
          rabbit.eat();  // Ошибка вызова super (потому что нет [[HomeObject]])
    }
}

