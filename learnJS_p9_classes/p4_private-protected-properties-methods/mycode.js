class Device {
    #privateMethod() {
      console.log("Это приватный метод");
    }
  
    _protectedMethod() {
      console.log("Это защищённый метод");
    }
  
    publicMethod() {
      console.log("Это публичный метод");
      this.#privateMethod();
      this._protectedMethod();
    }
  }
  const device = new Device();
  
  device.publicMethod();
  // Это публичный метод
  // Это приватный метод
  // Это защищённый метод
  
  device._protectedMethod(); // Это защищённый метод
  device.#privateMethod(); // TypeError: device.#privateMethod is not a function