{
  let x;
  let a = 5;
  let isError = false;

  try {
    console.log("code execution in try {}");
    x = a ** 2;
  } catch {
    console.log("code execution in catch {}");
    a = 5;
    isError = true;
  } finally {
    console.log("code execution in finally {}");
    if (isError) {
      console.log("re-calculation");
      x = a ** 2;
    }
  }

  console.log(x);
  //(a) code execution in try {}
  // code execution in finally {}
  // 25
  //--------------------------------------------------------------
  //(!a) code execution in try {}
  // code execution in catch {}
  // code execution in finally {}
  // re-calculation
  // 25
}



{
  {
    try {
      console.log("1");
      zopa;
      console.log("2");
    } catch (err) {
      console.log("error", err);
    }

    console.log(3);

    // 1
    // error -> ReferenceError{}
    // 3
  }

  {
    try {
      console.log("1");
      setTimeout(() => {
        zopa;
      }, 1000);
      console.log("2");
    } catch (err) {
      console.log("error", err);
    }

    console.log(3);

    //   1
    //   2
    //   3
    //   Error: zopa is not defined
  }
}



{
  try {
    let zopa = Object.create(null);
    if (!zopa.superMethod) {
      throw new Error("MegaZopa");
    }
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  } //Error MegaZopa
}




{
  function UserException(message) {
    this.message = message;
    this.name = "Исключение, определённое пользователем";
  }

  function getFruitName(fruit) {
    fruit = fruit - 1;
    const box = ["banana", "NeBanana", "MEGABABANA"];
    if (box[fruit] !== undefined) return box[fruit];

    throw new UserException("Неверно указан номер");
  }

  let fruitName;

  try {
    const a = 5;
    fruitName = getFruitName(a);
  } catch (e) {
    fruitName = "неизвестен";
    console.log(e.message, e.name);
  } //Неверно указан номер          Исключение, определённое пользователем
}



{ 
  const aboba = function () {
    try{
      return 'zopa'
    } catch {
  
    } finally {
      return 'MEGAZOPA'
    }
  }

  aboba(); //'MEGAZOPA'
}