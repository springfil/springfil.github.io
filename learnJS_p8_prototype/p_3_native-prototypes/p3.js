//Встроенные прототипы

//Получение название методов св-ва prototype
{
    var methods = Object.getOwnPropertyNames(Object.prototype);
    onsole.log(methods);
}


//---------
{
    const obj = {};
    const obj2 = new Object();
    let obj3 = Object.create(null);

    alert(obj); // [object Object]
    alert(obj2); // [object Object]
    alert(obj3); //Uncaught TypeError: Cannot convert object to primitive value

    obj3.__proto__ // undefined
}


//Другие встроенные методы 
{
    ['z','o','p','a'].toString //z,o,p,a
    //сработает Array.prototype.toString потому что ближе в цепочке прототипов
    console.dir(['z','o','p','a']) // выводит всю цепочку прототипов
}


//Примитивы 
//String, Number и Boolean
//String.prototype, Number.prototype и Boolean.prototype
{
    null/undefined // нет оберток и прототипов
}



//Изменение встроенных прототипов
{
    Number.prototype.toOne = function(){
        if (isNaN(this)) {
            return 1;
          } else {
            return this;
          }
    };

    NaN.toOne() // 1
}
// !!! методы становятся глобальными, поэтому могут быть конфликты 
// норм для создания полифилов 



//Заимствование у прототипов
{
    let obj = {
        0: "Biba",
        1: "Boba",
        length: 2,
      };
      
      obj.join = Array.prototype.join;
      
      console.log( obj.join('-') ); // Biba-boba
}
//Мы можем наследовать только от одного обьекта одновременно

