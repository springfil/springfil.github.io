class Teapot{
    constructor(power){
      this.power = power  // мощность (ватт)
      this.waterAmount = 0; // уровень воды (вес в мг)
      this.waterHeatCapipacity = 4200; // удельная темплоемкость воды
      this.maxWaterLevel = 1500; 
      this.Connected = false; // чайник не в сети
      this.timerId = null;
    }
    //формула для расчета HeatingTime = c*m*ΔT / power
    //с - удельная темплоемкость воды / m - уровень воды 
    // ΔT - насколько нагреть power - мощность 
    HeatingTime() {
      let time = this.waterAmount * this.waterHeatCapipacity * 74 / this.power;
      return time
    }
  
    CompleteHeating() {
      console.log(`Закипел! Время закипания - ${this.HeatingTime()} мс`);
      clearTimeout(this.timerId);
    }
  
    CheckWaterLevel() {
      if (this.waterAmount === 0) {
        console.log('Ошибка! Чайник пустой. Добавить воды instance.waterAmount = somevalue');
        return false;
      }
      
      if (this.waterAmount > this.maxWaterLevel) {
        console.log('Ошибка! Уровень воды превышает максимальный уровень.');
        return false;
      }
      
      return true;
    }
  
    CheckConnection(){
      if (!this.Connected){
        console.log('Ошибка! Не включен в розетку.Включить в сеть instance.Connected = true ');
        return false;
      }
      
      return true;
    }
  
    pourOutWater(amount) {
      if (amount > this.waterAmount) {
        console.log('Ошибка! Нельзя отлить больше, чем есть воды.');
        return false;
      }
  
      this.waterAmount -= amount;
      console.log(`Вы вылили ${amount} мл воды. Текущий уровень воды: ${this.waterAmount} мл.`);
  
      return true;
    }
  
    start() {
      if (this.CheckConnection() && this.CheckWaterLevel()) {
        this.timerId = setTimeout(() => this.CompleteHeating(), this.HeatingTime());
      }
    }
  }
  
  
//   const teapot = new Teapot(200000); 
//   teapot.start(); 
//   teapot.Connected = true;
//   teapot.start();
//   teapot.waterAmount = 2000;
//   teapot.start();
//   teapot.pourOutWater(500);
//   teapot.start()
  
  
  
  
  
  