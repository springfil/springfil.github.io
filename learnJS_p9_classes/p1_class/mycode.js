{
  function Person(age, gender) {
    this.age = age;
    this.gender = gender;

    this.showData = function () {
      console.log("Возраст: " + this.age + ", Пол: " + this.gender);
    };
  }

  let tim = new Person(32, "Мужской");
  tim.showData(); // Возраст: 32, Пол: Мужской

  let aboba = new Person(27, "Женский");
  aboba.showData(); // Возраст: 27, Пол: Женский
}

{
  class Person {
    constructor(age, gender) {
      this.age = age;
      this.gender = gender;
    }

    showData() {
      console.log(`Возраст: ${this.age}, Пол: ${this.gender}`);
    }
  }

  let tim = new Person(32, "Мужской");
  tim.showData(); // Возраст: 32, Пол: Мужской

  let aboba = new Person(27, "Женский");
  aboba.showData(); // Возраст: 27, Пол: Женский
}
