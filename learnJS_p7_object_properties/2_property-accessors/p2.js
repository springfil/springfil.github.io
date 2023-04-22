//Свойства - геттеры и сеттеры
{
    //свойства-данные (data properties) все свойства до этой главы
    
    //свойства-аксессоры (accessor properties) -  функции, которые используются 
    //для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта.
}

//  Get/Set
{
    let obj = {
        get propName() {
          // геттер, срабатывает при чтении obj.propName
        },
      
        set propName(value) {
          // сеттер, срабатывает при записи obj.propName = value
        }
      };
}

{
    let user = {
        name: "John",
        surname: "Smith",
      
        get fullName() {
          return `${this.name} ${this.surname}`;
        },
      
        set fullName(value) {
          [this.name, this.surname] = value.split(" ");
        }
      };
      
      // set fullName запустится с данным значением
      user.fullName = "Alice Cooper";
      
      alert(user.name); // Alice
      alert(user.surname); // Cooper
    //Если назначить user.fullName без set - ошибка,  
}

//-------------

//Дескрипторы свойств доступа
{// не имеют value и writable
//     дескриптор аксессора может иметь:
//     get – функция без аргументов, которая сработает при чтении свойства,
//     set – функция, принимающая один аргумент, вызываемая при присвоении свойства,
//     enumerable – то же самое, что и для свойств-данных,
//     configurable – то же самое, что и для свойств-данных.
}

{// для создания аксессора fullName при помощи defineProperty 
    //мы можем передать дескриптор с использованием get и set:
    let user = {
        name: "John",
        surname: "Smith"
      };
      
      Object.defineProperty(user, 'fullName', {
        get() {
          return `${this.name} ${this.surname}`;
        },
      
        set(value) {
          [this.name, this.surname] = value.split(" ");
        }
      });
      
      alert(user.fullName); // John Smith
      for(let key in user) alert(key); // name, surname
    //При попытке указать и get, и value в одном дескрипторе будет ошибка
}

//-----------------

//Умные геттеры/сеттеры - можно использовать как обёртки над «реальными» значениями свойств
{
    let user = {
        get name() {
          return this._name;
        },
      
        set name(value) {
          if (value.length < 4) {
            alert("Имя слишком короткое, должно быть более 4 символов");
            return;
          }
          this._name = value;
        }
      };
      
      user.name = "Pete";
      alert(user.name); // Pete
      
      user.name = ""; // Имя слишком короткое...
}

//----------------

//Использование для совместимости
{   // было так
    {
        function User(name, age) {
            this.name = name;
            this.age = age;
          }
          
          let john = new User("John", 25);
          
          alert( john.age ); // 25
    }
    //понадобилось хранить birthday
    {
        function User(name, birthday) {
            this.name = name;
            this.birthday = birthday;
          }
          
          let john = new User("John", new Date(1992, 6, 1));
    }
    //но мы хотим доступ к age, и не хотим выполнять поиск и замену по всем файлам
    {
        function User(name, birthday) {
            this.name = name;
            this.birthday = birthday;
          
            // возраст рассчитывается из текущей даты и дня рождения
            Object.defineProperty(this, "age", {
              get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
              }
            });
          }
          
          let john = new User("John", new Date(1992, 6, 1));
          
          alert( john.birthday ); // доступен как день рождения
          alert( john.age );      // ...так и возраст
    }
}