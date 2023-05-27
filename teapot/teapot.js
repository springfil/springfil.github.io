class Teapot {
  constructor(power) {
    this.power = power; // мощность (ватт)
    this.waterAmount = 0; // уровень воды (вес в мг)
    this.waterHeatCapipacity = 4200; // удельная темплоемкость воды
    this.maxWaterLevel = 1500;
    this.Connected = false; // чайник не в сети
    this.timerId = null;
    this.heating = false;
  }
  //формула для расчета HeatingTime = c*m*ΔT / power
  //с - удельная темплоемкость воды / m - уровень воды
  // ΔT - насколько нагреть power - мощность
  HeatingTime() {
    let time = (this.waterAmount * this.waterHeatCapipacity * 74) / this.power;
    return time;
  }

  CompleteHeating() {
    console.log(`Закипел!`);
    clearTimeout(this.timerId);
    this.timerId = null;
  }

  CheckWaterLevel() {
    if (this.waterAmount === 0) {
      console.log(
        "Ошибка! Чайник пустой. Добавить воды instance.waterAmount = somevalue"
      );
      return false;
    }

    if (this.waterAmount > this.maxWaterLevel) {
      console.log(
        "Ошибка! Вы перелили воду. Отлить instance.PourOutWater(somevalue)"
      );
      this.waterAmount = this.maxWaterLevel;
      return false;
    }

    return true;
  }

  CheckConnection() {
    if (!this.Connected) {
      console.log(
        "Ошибка! Не включен в розетку.Включить в сеть instance.Connected = true "
      );
      return false;
    }

    return true;
  }

  PourOutWater(amount) {
    if (amount > this.waterAmount) {
      console.log(
        "Ошибка! Нельзя отлить больше, чем есть воды. Вы вылили всю воду!"
      );
      this.waterAmount = 0;
      return false;
    }

    this.waterAmount -= amount;
    console.log(
      `Вы вылили ${amount} мл воды. Текущий уровень воды: ${this.waterAmount} мл.`
    );

    // if (this.waterAmount <= this.maxWaterLevel) {
    //   this.start()
    // }

    return true;
  }

  start() {
    if (this.CheckConnection() && this.CheckWaterLevel()) {
      if (this.heating) {
        console.log("Ошибка! Чайник уже включен. Дождитесь окончания работы");
        return;
      }

      this.timerId = setTimeout(() => {
        this.CompleteHeating();
        this.heating = false; 
      }, this.HeatingTime());
      console.log(`Чайник включен. Время закипания - ${this.HeatingTime()} мс`);
      this.heating = true;  
    }
  }
}


// const teapot = new Teapot(20000); // чайник большой мощности
// teapot.start();
// teapot.Connected = true;
// teapot.start();
// teapot.waterAmount = 2000; //добавили выше уровня
// teapot.start();
// teapot.PourOutWater(1600); // вылили больше чем есть
// teapot.start();
// teapot.waterAmount = 500; // налили нормально
// teapot.start();
// teapot.start();
// teapot.start();
