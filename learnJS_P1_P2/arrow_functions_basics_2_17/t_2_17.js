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
