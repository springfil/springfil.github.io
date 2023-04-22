function Person(...date){
    this.name = date[0];
    this.age = date[1];
    this.gender = date[2];
}

const aboba = new Person("Boba",27,"male");

console.log(aboba);

Object.defineProperties(aboba,{
    age: {value: 30, writable: false},
    name: {value: "Biba", writable: false},
})

let descriptor = Object.getOwnPropertyDescriptors(aboba);

/*
{   console.log(JSON.stringify(descriptor,null,2))
    {
        "name": {
          "value": "Biba",
          "writable": false,
          "enumerable": true,
          "configurable": true
        },
        "age": {
          "value": 30,
          "writable": false,
          "enumerable": true,
          "configurable": true
        },
        "gender": {
          "value": "male",
          "writable": true,
          "enumerable": true,
          "configurable": true
        }
      }
}
*/

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(aboba));
console.log(clone === aboba) // false

Object.freeze(clone);
console.log(Object.isFrozen(clone))// true