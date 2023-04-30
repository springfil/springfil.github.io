function Person(...rest) {
  let _name = rest[0];
  let _age = rest[1];
  let _gender = rest[2];

  Object.defineProperties(this, {
    name: {
      get() {
        return _name;
      },
      set(value) {
        if (typeof value !== "string") {
          throw new Error("Имя должно быть строкой");
        }
        _name = value;
      },
    },
    age: {
      get() {
        return _age;
      },
      set(value) {
        if (typeof value !== "number") {
          throw new Error("Возраст должен быть числом");
        }
        _age = value;
      },
    },
    gender: {
      get() {
        return _gender;
      },
      set(value) {
        if (value !== "мужской" && value !== "женский") {
          throw new Error('Пол должен быть "мужской" или "женский"');
        }
        _gender = value;
      },
    },
  });
}

const aboba = new Person("Боба", 27, "мужской");
console.log(aboba);

aboba.name = "Доба";
console.log(aboba.name);
aboba.age = "zopa"; // Error('Возраст должен быть числом');
console.log(aboba.age);



let obj = {};

Object.defineProperty(obj, "maxim", {
  get() {
    return obj._maxim.toUpperCase();
  },
  set(value) {
    obj._maxim = value.toUpperCase();
  },
  enumerable: true,
});
console.log(obj);
obj.maxim = "zopa";
console.log(obj.maxim);
console.log(obj);//{maxim: "ZOPA", _maxim: "ZOPA"}



const obj1 = {
  maximValue: "",

  get maxim() {
    return this.maximValue.toUpperCase();
  },

  set maxim(value) {
    this.maximValue = value;
  },
};

obj1.maxim = "zopa";

console.log(obj.maxim); // "ZOPA"
console.log(obj1);//{maximValue: "zopa", maxim: "ZOPA"}
