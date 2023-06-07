class Teapot {
  constructor(power) {
    this.power = power; 
    this.waterAmount = 0; 
    this.connected = false;
    this.timerId = null;
    this.intervalId = null;
    this.coolIntervalId = null;
    this.currentTemperature = this.#roomTemperature;
  }

  #waterHeatCapipacity = 4200; 
  #maxWaterLevel = 1500;
  #heating = false;
  #maxTemperature = 100;
  #roomTemperature = 26;

  //формула для расчета heatingTime = c*m*ΔT / power
  //с - удельная темплоемкость воды / m - уровень воды
  // ΔT - насколько нагреть power - мощность

  get heatingTime() {
    return (this.waterAmount * this.#waterHeatCapipacity * (this.#maxTemperature - this.currentTemperature)) / this.power;
  }

  completeHeating() {
    console.log(`Закипел!`);
    clearTimeout(this.timerId);
    this.timerId = null;
  }

  checkWaterLevel() {
    if (this.waterAmount === 0) {
      console.log(
        `Ошибка! Чайник пустой. Добавить воды ${this.constructor.name.toLowerCase()}.waterAmount = somevalue`
      );
      return false;
    }

    if (this.waterAmount > this.#maxWaterLevel) {
      this.waterAmount = this.#maxWaterLevel;
      console.log(
        `Ошибка! Превышен уровень воды ${this.#maxWaterLevel} мл., теперь чайник полный. Отлить ${this.constructor.name.toLowerCase()}.pourOutWater(somevalue)`
      );
      return false;
    }

    return true;
  }

  checkConnection() {
    if (!this.connected) {
      console.log(
        `Ошибка! Не включен в розетку. Включите в сеть ${this.constructor.name.toLowerCase()}.connected = true`
      );
      return false;
    }

    return true;
  }

  pourOutWater(amount) {
    if (amount > this.waterAmount) {
      this.waterAmount = 0;
      console.log(
        `Ошибка! Нельзя отлить больше, чем есть воды. Текущий уровень воды: ${this.waterAmount} мл`
      );
      return false;
    }

    this.waterAmount -= amount;
    console.log(
      `Вы вылили ${amount} мл воды. Текущий уровень воды: ${this.waterAmount} мл.`
    );

    return true;
  }

  get timeTempUp() {
    return this.heatingTime / (this.#maxTemperature - this.currentTemperature);
  }

  tempUp(){
    this.intervalId = setInterval(() => {
      this.currentTemperature += 1;
      console.log(`Чайник нагревается.T — ${this.currentTemperature} °C`);
    }, this.timeTempUp)
    
  }
  
  start() {
    if (this.checkConnection() && this.checkWaterLevel()) {
      if (this.#heating) {
        console.log("Ошибка! Чайник уже включен. Дождитесь окончания работы");
        return;
      }
      
      this.tempUp();
      
      this.timerId = setTimeout(() => {
        clearInterval(this.intervalId);
        this.#heating = false; 
        this.completeHeating();
        this.tempDown();
      }, this.heatingTime);
      
      console.log(`Чайник включен. Время закипания - ${this.heatingTime} мс \n текущая температура — ${this.currentTemperature}°C \n Текущий уровень воды — ${this.waterAmount}мл.`);
      this.#heating = true;  
    }
    
    clearInterval(this.coolIntervalId);
  }
  
  tempDown() {
    this.coolIntervalId = setInterval(() => {
      this.currentTemperature -= 1;
      console.log(`Чайник остывает. T — ${this.currentTemperature}°C`);
      
      if (this.currentTemperature <= this.#roomTemperature + 1) {
        clearInterval(this.coolIntervalId);
        console.log(`Чайник полностью остыл до комнатной температуры.`);
      }
      
      if(this.#heating) {
        clearInterval(this.coolIntervalId);
      }
    }, 300)
    
  }
  
  stop() {
    if (!this.#heating) {
      console.log("Ошибка! Чайник еще не начал кипеть");
      return;
    }
    
    clearInterval(this.intervalId);
    clearTimeout(this.timerId);
    this.#heating = false; 
    
    console.log(`Чайник остановлен, текущая температура — ${this.currentTemperature}°C \n Текущий уровень воды — ${this.waterAmount}мл. \n Можно отлить или добавить воды, время закипания изменится`);
    
    this.tempDown()
  }
}


// const teapot = new Teapot(20000); // чайник большой мощности

// teapot.start();
// teapot.connected = true;
// teapot.start();
// teapot.waterAmount = 2000; //добавили выше уровня
// teapot.start();
// teapot.pourOutWater(1600); // вылили больше чем есть
// teapot.start();
// teapot.waterAmount = 800; 
// teapot.start();

// teapot.stop()
