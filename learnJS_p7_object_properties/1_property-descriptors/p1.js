//Флаги и дескрепторы свойств

// Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).
// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

//Получение полной информации о свойстве
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName); 

{//FOR EXAMPLE
    let user = {
        name: "John"
      };
      
      let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
      
      alert( JSON.stringify(descriptor, null, 2 ) );
      /* дескриптор свойства:
      {
        "value": "John",
        "writable": true,
        "enumerable": true,
        "configurable": true
      }
      */
}

//изменение флагов
Object.defineProperty(obj, propertyName, descriptor)

{
    // Если свойство существует, defineProperty обновит его флаги. 
    // В противном случае метод создаёт новое свойство с указанным значением и флагами; 
    // если какой-либо флаг не указан явно, ему присваивается значение false.
    let user = {};

    Object.defineProperty(user, "name", {
      value: "John"
    });
    
    let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
    
    alert( JSON.stringify(descriptor, null, 2 ) );
    /*
    {
      "value": "John",
      "writable": false,
      "enumerable": false,
      "configurable": false
    }
     */
}

//Ошибки только в use strict

{//можно передать пачку свойств
  Object.defineProperties(obj, {
    prop1: descriptor1,
    prop2: descriptor2
    // ...
  });
  {
    Object.defineProperties(user, {
      name: { value: "John", writable: false },
      surname: { value: "Smith", writable: false },
      // ...
    });
  }
}



//Object.getOwnPropertyDescriptors
{
  {//игнорирует символьные и неперечислимые свойства
    for (let key in user) {
      clone[key] = user[key]
    }
  }

  {//возвращает дескрипторы всех свойств.
    let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
  }
}



//Глобальное запечатывание объекта
// Дескрипторы свойств работают на уровне конкретных свойств.
// Но ещё есть методы, которые ограничивают доступ ко всему объекту:
{
  Object.preventExtensions(obj)
  // Запрещает добавлять новые свойства в объект.
}
{
  Object.seal(obj)
  // Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
}
{
  Object.freeze(obj)
  // Запрещает добавлять/удалять/изменять свойства. 
  // Устанавливает configurable: false, writable: false для всех существующих свойств.
}


{//А также есть методы для их проверки:
  {
    Object.isExtensible(obj)
    // Возвращает false, если добавление свойств запрещено, иначе true.
  }
  {
    Object.isSealed(obj)
    // Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств
    // установлено configurable: false.
  }
  {
    Object.isFrozen(obj)
    // Возвращает true, если добавление/удаление/изменение свойств запрещено, 
    // и для всех текущих свойств установлено configurable: false, writable: false.
    // На практике эти методы используются редко.
  }
}