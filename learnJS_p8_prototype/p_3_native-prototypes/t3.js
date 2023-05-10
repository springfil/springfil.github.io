// Добавьте всем функциям в прототип метод defer(ms), 
// который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:
// function f() {
//     alert("Hello!");
//   }
  
//   f.defer(1000); // выведет "Hello!" через 1 секунду
{
    function f(){
        console.log('zopa');
    }

    Function.prototype.defer = function(ms){
        setTimeout(this, ms);
    }

    f.defer(5000) // сообщение через 5 сек
}


//-------------
// function f(a, b) {
//     alert( a + b );
//   }
  
//   f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
{
    function f(a, b) {
        console.log( a + b );
      }
    
    Function.prototype.defer = function(ms){
        let f = this;
        return function(...args) {
            setTimeout(() => f.apply(this,args),ms);
        }
    }  
      
    f.defer(5000)(1, 2); // выведет 3 через 5 секунд.
}