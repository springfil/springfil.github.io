// Деструктурировать объект как массив. Какая ошибка появляется?
//TypeError: object is not iterable
// Применить Symbol.iterator чтобы деструкторизировать без ошибок.

const obj = {
    name: "Tim",
    surname: "Kenzhaev",
    cash: 150000,
  };
  
  obj[Symbol.iterator] = function () {
    const properties = Object.keys(this);
    let index = 0;
  
    return {
      next: () => {
        if (index < properties.length) {
          const property = properties[index];
          index++;
          return { value: this[property], done: false };
        } else {
          return { done: true };
        }
      },
    };
  };
  
  const [name, surname, cash] = obj;
  console.log(name, surname, cash);

// Деструктрурировать массив как объект 
const arr7 = [2, 1, undefined, 5, null];
const obj7 = Object.fromEntries(arr7.entries());
console.log(obj7);