//переписать в стрелочную 
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );
  */

let ask = (question, yes, no) => 
(confirm(question))?yes((alert('YES'))):no((alert('NO')));

ask('Вы согласны?')


// Посчитать количество книг на полках 
let sumAllBooksOnTheShelves = (shelf1, shelf2 ,shelf3) => shelf1 + shelf2 + shelf3;
console.log('На полках ' + sumAllBooksOnTheShelves(10,20,5) + ' книг');


//Сколько часов в день ты практикуешься в JS
let jsTime = prompt('Сколько сегодня затрекал времени',);

let whoAreUInJavascript = (jsTime>=3)?
    () => alert('красава') :
    () => alert(`Абоба:  \n Надо больше ботать`);
whoAreUInJavascript();    


