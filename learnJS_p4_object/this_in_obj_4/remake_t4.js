// this - это ключевое слово, которое ссылается на тот или иной объект в зависимости от того, 
// где оно записано или как была вызвана функция, где this присутствует.

// this или другими словами контекст выполнения - это одна из тем понимание которой 
// необходимо для изучения объектно-ориентированного программирования (ООП) в JavaScript.
console.log(this) // this === window

//запросим значение свойства объекта, предварительно установив его, как this.
let student = {
    name: this
  }

  console.log(student.name) // this === window

//если this записать в функцию, которая лежит внутри другой функции, результат будет таким же. 
function testThis() {
    (function () {
      console.log(this === window)
    })()
  }
  
  testThis() // true

//Теперь рассмотрим другой контекст отличный от глобального.    
let student = {
    name: 'Дмитрий',
    course: 'HTML + CSS',
    level: 'junior',
    objMethod() {
      console.log(this)
    }
  }
  
  student.objMethod()  // выведет объект студент
 //
 let student = {
    name: 'Дмитрий',
    course: 'HTML + CSS',
    level: 'junior',
    statement() {
      console.log(`${this.name} c уровнем ${this.level} хочет поступить на курс ${this.course}`)
    }
  }
  
  student.statement()//Дмитрий c уровнем junior хочет поступить на курс HTML + CSS
//мы хотим эту функцию назначить нескольким объектам
function statement() {
    console.log(`${this.name} c уровнем ${this.level} хочет поступить на курс ${this.course}`)
  }
  
  let student1 = {
    name: 'Дмитрий',
    course: 'HTML + CSS',
    level: 'junior',
    statement
  }
  
  let student2 = {
    name: 'Ольга',
    course: 'Basic JavaScript',
    level: 'junior',
    statement
  }
  
  student1.statement() // Дмитрий c уровнем junior хочет поступить на курс HTML + CSS
  student2.statement() // Ольга c уровнем junior хочет поступить на курс Basic JavaScript

//если функцию положить в переменную и вызвать уже ее, результат будет отличным.
let student1 = {
    name: 'Пётр',
    statement() {
        console.log(`Имя студента ${this.name}`)
    }
  }
  
  student1.statement() // Имя студента Дмитрий
  let anotherVar = student1.statement
  anotherVar() // Имя студента

//Стрелочные функции
let student = {
    name: 'Дмитрий',
    objMethod() {
        console.log(this) // {name: 'Дмитрий', objMethod: ƒ}

        let arrowFunc = () => console.log(this)
        arrowFunc() // {name: 'Дмитрий', objMethod: ƒ}

        function funcWithinFunc() {
            console.log(this)
        }
        funcWithinFunc() // window // НЕЕ ПОНЯЛ
    }
  }
  
  student.objMethod() // student  