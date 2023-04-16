function setMyVar() {
    var myVar = 2;
  }
  
  setMyVar();
  
  console.log(myVar); // ошибка



//
function varTest() {
    for (var i = 0; i < 3; i++) {
        console.log(i);
      }
      console.log(i); // var ограничена областью видимости функции
    }
     varTest() / 0 1 2 3 

function letTest() {
    for (let m = 0; m < 3; m++) {
        console.log(m);
    }
    console.log(m); // вне for m не определена
    }
        
varTest() // 0 1 2 //ошибка     