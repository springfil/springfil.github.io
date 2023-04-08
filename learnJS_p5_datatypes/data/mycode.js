 //https://www.epochconverter.com/
 
 const d1 = new Date();
 console.log(d1);// mycode.js:2 Sat Apr 08 2023 17:20:33 GMT+0300 (Москва, стандартное время)

 // миллисекунды
 const d2 = new Date(1680963537000);//timestamp*1000
 console.log(d2)//Sat Apr 08 2023 17:18:57 GMT+0300 (Москва, стандартное время)

 // явно
 const d3 = new Date(2023, 3, 8, 17, 26);
 console.log(d3)//Mon May 08 2023 17:26:00 GMT+0300 (Москва, стандартное время)

 const d4 = new Date('2023 April 8');
 console.log(d4);
 console.log(typeof d4)//obj

 // str in obj
 const d5 = new Date("Mon May 08 2023 17:26:00 GMT+0300");
 console.log(d5) ;
 document.querySelector('.out-1').innerHTML = d5;
 document.querySelector('.out-2').innerHTML = d5.toUTCString(); //по гринвичу
 //
 document.querySelector('.out-3').innerHTML = d5.toDateString();//Mon May 08 2023
 document.querySelector('.out-4').innerHTML = d5.toISOString();//2023-05-08T14:26:00.000Z


//стандарты
const d20 = new Date();
//методы
console.log(d20.getFullYear());//2023
console.log(d20.getMonth());//3 //МЕСЯЦЫ ИДУТ С 0
console.log(d20.getDate());// 8 //текущий день
console.log(d20.getDay());//6 - суббота - с 0(воскресенья)
console.log(d20.getHours());// 17 // с 0 до 24
console.log(d20.getMinutes());//46 // 0 -- 59
console.log(d20.getMilliseconds());//942 
console.log(d20.getTime());// unixTime
console.log(Date.now());// в момент вызова unixtime


function addLeadingZero(d){
    return (d < 10) ? '0' + d : d; 
}

const days = ['воск','понедельник',"вторник","среда","четверг","пятница","суббота"]

function getUserTime(t = new Date()){ // если не передавать время
    let Y = t.getFullYear();
    let M = addLeadingZero(t.getMonth() + 1);
    let D = addLeadingZero(t.getDate());
    let d = days[t.getDay()];
    let h = addLeadingZero(t.getHours());
    let m = addLeadingZero(t.getMinutes());
    // if(M < 10) M = '0' + M;
    console.log(Y, M, D, d, h, m);
    return `${Y}.${M}.${D} ${h}:${m} ${d}`
}
console.log(getUserTime(new Date(1680965311195)))//2023.04.08 17:48 суббота
