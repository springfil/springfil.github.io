class Teapot {
  constructor(power) {
    this.power = power; 
    this.waterAmount = 0; 
    this.timerId = null;
    this.connected = false;
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
    return (this.waterAmount * this.#waterHeatCapipacity * (this.#maxTemperature - this.#roomTemperature)) / this.power;
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

    // if (this.waterAmount <= this.#maxWaterLevel) {
    //   this.start()
    // }

    return true;
  }

  showHeatingStatus() {
    let timeLeft = this.heatingTime;
    const intervalId = setInterval(() => {
      if (!this.#heating) { 
        clearInterval(intervalId);
        return;
      }
      const heatingProgress = 'ТУТ ТУПЛЮ';
      console.log(`Уровень нагрева: ${heatingProgress} | Осталось времени: ${timeLeft/1000} сек.`);
      timeLeft -= 1000;
    }, 1000);
  }

  start() {
    if (this.checkConnection() && this.checkWaterLevel()) {
      if (this.#heating) {
        console.log("Ошибка! Чайник уже включен. Дождитесь окончания работы");
        return;
      }
      this.showHeatingStatus();
      this.timerId = setTimeout(() => {
        this.completeHeating();
        this.#heating = false; 
      }, this.heatingTime);
      console.log(`Чайник включен. Время закипания - ${this.heatingTime} мс`);
      this.#heating = true;  
    }
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
// teapot.waterAmount = 500; 
// teapot.start();
