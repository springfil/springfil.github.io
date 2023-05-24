{ 
    class PowerArray extends Array {
        isEmpty() {
          return this.length === 0;
        }
      }
      
      let arr = new PowerArray(1, 2, 5, 10, 50);
      console.log(arr.isEmpty()); // false
      
      let filteredArr = arr.filter(item => item >= 10);
      console.log(filteredArr, typeof filteredArr, Array.isArray(filteredArr)); // 10, 50 /object / true
      console.log(filteredArr.isEmpty()); // false
      
      console.log(arr.constructor === PowerArray) //+
    //   [[Prototype]]: Array
    // constructor: class PowerArray
}

{// хотим вернуть обычный массив    
    class PowerArray extends Array {
        isEmpty() {
          return this.length === 0;
        }
      
        // встроенные методы массива будут использовать этот метод как конструктор
        static get [Symbol.species]() {
          return Array;
        }
      }
      
      let arr = new PowerArray(1, 2, 5, 10, 50);
      console.log(arr.isEmpty()); // false
      
      // filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
      let filteredArr = arr.filter(item => item >= 10);
      
      // filteredArr не является PowerArray, это Array
      console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
    
    // filteredArr [[Prototype]]: Array(0)
}


// Отсутствие статического наследования встроенных классов