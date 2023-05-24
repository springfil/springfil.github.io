{// instanceof работает с
    {
        //классы, функции конструкторы, встроенные классы
    }

    {
        class Rabbit {}
        let rabbit = new Rabbit();
        alert( rabbit instanceof Rabbit ); // true
    }

    {
        function Rabbit() {}
        alert( new Rabbit() instanceof Rabbit ); +
    }

    {
        let arr = [1, 2, 3];
        alert( arr instanceof Array ); 
        alert( arr instanceof Object ); 
    }
}



{
    // Обычно оператор instanceof просматривает для проверки цепочку прототипов.
    // Но это поведение может быть изменено при помощи статического метода Symbol.hasInstance.
    {
        // проверка instanceof будет полагать,
        // что всё со свойством canEat - животное Animal
        class Animal {
            static [Symbol.hasInstance](obj) {
            if (obj.canEat) return true;
            }
        }
  
        let obj = { canEat: true };
        alert(obj instanceof Animal); +
    }

}

{
    // Большая часть классов не имеет метода Symbol.hasInstance. В этом случае используется стандартная логика: 
    // проверяется, равен ли Class.prototype одному из прототипов в прототипной цепочке obj.
    {
        obj.__proto__ === Class.prototype?
        obj.__proto__.__proto__ === Class.prototype?
        obj.__proto__.__proto__.__proto__ === Class.prototype?
        
        // если какой-то из ответов true - возвратить true
        // если дошли до конца цепочки - false
     }

    {
        class Animal {}
        class Rabbit extends Animal {}

        let rabbit = new Rabbit();
        alert(rabbit instanceof Animal); // true

        // rabbit.__proto__ === Animal.prototype (нет совпадения)
        // rabbit.__proto__.__proto__ === Animal.prototype (совпадение!)
    }

    {
        // Кстати, есть метод objA.isPrototypeOf(objB), который возвращает true, если объект objA есть 
        // где-то в прототипной цепочке объекта objB. Так что obj instanceof Class можно перефразировать 
        // как Class.prototype.isPrototypeOf(obj).

        //Важна только цепочка прототипов Class.prototype.
    }
}



{
    {//это знаем
        obj.toString() // [object Object]
    }

    {
        // скопируем метод toString в переменную для удобства
        let objectToString = Object.prototype.toString;

        // какой это тип?
        let arr = [];
        alert( objectToString.call(arr) ); // [object Array]
    }

    {
        let s = Object.prototype.toString;

        alert( s.call(123) ); // [object Number]
        alert( s.call(null) ); // [object Null]
        alert( s.call(alert) ); // [object Function]
    }
}



{//настройка поведение метода объектов toString
    let user = {
        [Symbol.toStringTag]: "User"
      };
      
    alert( {}.toString.call(user) ); // [object User]
}


// работает         для	                                                            возвращает
// typeof	        примитивов	                                                    строка
// {}.toString	    примитивов, встроенных объектов, объектов с Symbol.toStringTag	строка
// instanceof	    объектов	                                                    true/false
