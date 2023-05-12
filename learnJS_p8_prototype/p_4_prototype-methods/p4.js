// Методы прототипов, объекты без свойства __proto__

{//__proto__  - плохо, статические методы ок:

    // Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], 
    // указанным как proto, и необязательными дескрипторами свойств descriptors.
    
    // Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.

    // Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.
    {
        let students = {
            stack : ["JS","Vue","Pinia"],
          }

          let person = Object.create(students);
          
          console.log(person); // {}
          console.log(person.stack); // находит stack в прототипе
          console.log(Object.getPrototypeOf(person) === students) //true
    }

    {   //второй аргумент: дескрипторы свойств
        let students = {
            stack : ["JS","Vue","Pinia"],
          }
          
          let person = Object.create(students,{
            age: {
              value: 27,
            }
          });
          
          console.log(person.age) //27 
    }

    {
        let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
        // Такой вызов создаёт точную копию объекта obj, включая все свойства: перечисляемые и неперечисляемые, 
        // геттеры/сеттеры для свойств – и всё это с правильным свойством [[Prototype]].
    }
}



{//простейший обьект
    let obj = Object.create(null);
    alert(obj) // Error: Cannot convert object to primitive value
    
    {//Object.something(...) - не в прототипе , поэтому работают
        let chineseDictionary = Object.create(null);
        chineseDictionary.hello = "你好";
        chineseDictionary.bye = "再见";

        console.log(Object.keys(chineseDictionary)); // hello,bye
    }

    {//приколы
        {
            let obj = {};

            let key = prompt("What's the key?", "__proto__");
            obj[key] = "some value";

            alert(obj[key]); // [object Object], не "some value"!      
        }
        //--------
        {
            let obj = Object.create(null);

            let key = prompt("What's the key?", "__proto__");
            obj[key] = "some value";

            alert(obj[key]); // "some value"
        }
    }
}


{
    // Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают 
    // массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.

    // Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.

    // Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.

    // Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.

    // obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.
}
