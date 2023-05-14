class NewPizza {
  temperature = "hot";
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log(`${this.name} is ${this.temperature}`);
  }
}

class Pizza extends NewPizza {
  constructor(name) {
    super(name);
  }

  info() {
    console.log(`${this.name} is not ${this.temperature}`);
  }
}

new NewPizza("Peperoni").info(); //Peperoni is hot
new Pizza("margarita").info(); //margarita is not hot
