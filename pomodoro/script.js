const POMODORO_BUTTON = document.getElementById("pomodoro");
const SHORTBREAK_BUTTON = document.getElementById("short-break");
const LONGBREAK_BUTTON = document.getElementById("long-break");
const TIMER_ELEMENT = document.getElementById("timer");
const PROGRESS_BAR = document.getElementById("html");
const START_BUTTON = document.getElementById("start");
const STOP_BUTTON = document.getElementById("stop");
const C1_strokeDasharray = document.getElementById("c1");
const C2_strokeDasharray = document.getElementById("c2");
// const C1_strokeDashoffset = document.getElementById("c1");
// const COUNTER_TEXT = document.getElementById("counterText");


const timers = {
  "pomodoro": 25*60 ,
  "short-break": 30,
  "long-break": 10*60,
};

let currentTimer = null;
let timeLeft = null;
let timerId = null;


function updateTimer() {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  // const progressBar = document.querySelector(".progress-bar");
  // progressBar.style.setProperty(
  //   "--progress-value",
  //   (1 - timeLeft / 1500).toFixed(2)
  // );
  // progressBar.classList.add("active");

  // PROGRESS_BAR.value = timeLeft;
  TIMER_ELEMENT.innerText = `${minutes}:${seconds}`;
  // document.getElementById(
  //   "progress-counter"
  //   ).innerText = `${minutes}:${seconds}`;
  };
  
  function setTimer(timer) {
    stopTimer();
    currentTimer = timers[timer];
    // document.documentElement.style.setProperty('--progress-value', '0');
    timeLeft = timers[timer];
    updateTimer(); 
  }
  
  POMODORO_BUTTON.addEventListener("click", setTimer.bind(null, "pomodoro"));
  SHORTBREAK_BUTTON.addEventListener("click", setTimer.bind(null, "short-break"));
  LONGBREAK_BUTTON.addEventListener("click", setTimer.bind(null, "long-break"));
  STOP_BUTTON.addEventListener("click", stopTimer);
  START_BUTTON.addEventListener("click", startTimer);


function startTimer() {
  START_BUTTON.disabled = true;
  STOP_BUTTON.disabled = false;

  if (currentTimer !== null) {
    timeLeft = currentTimer;
  } else {
    timeLeft = timers["pomodoro"];
  }

  // let progressBar = document.querySelector(".progress-bar");
  // progressBar.style.animationPlayState = "running";
  // progressBar.classList.add("active");
 
  timerId = setInterval(() => {
    timeLeft--;

    if (timeLeft + 1 === 0) {
      clearInterval(timerId);
      timeLeft = null;
      START_BUTTON.disabled = false;
      STOP_BUTTON.disabled = true;
      // PROGRESS_BAR.value = 0;
      // document.querySelector(".progress-bar").classList.remove("active");
      chooseBreakType();
    }

   
    // const k = (100 / timeLeft).toFixed(2);
    // const l = (100 - k).toFixed(2);
    // console.log(timeLeft,"-",k,"-",l);

    const l = (timeLeft / currentTimer) * 100 ;
    const k = 100 - l;
    console.log(timeLeft,"-",k,"-",l);

    C1_strokeDasharray.style.strokeDasharray = `${l} ${k}`;
    C2_strokeDasharray.style.strokeDasharray = `${k} ${l}`;
    C1_strokeDasharray.style.strokeDashoffset = l;
    // COUNTER_TEXT.innerHTML = timeLeft ;

    
    
    updateTimer();
  }, 1000);
}

function chooseBreakType() {
  const choice = confirm("Хорошо поработал, отдохнем?");
  const breakTypes = Object.keys(timers).slice(1);
  let breakChosen = false;
  
  if (choice) {
    const breakType = breakTypes
    .map((type) => {
      if (!breakChosen && confirm(`Выберите тип перерыва: ${type}?`)) {
        breakChosen = true;
        return type;
        }
        return null;
      })
      .find(Boolean);

    if (breakType) {
      setTimer(breakType);
      if (currentTimer !== null) { 
        startTimer();
      }
    }
  } else {
    setTimer("pomodoro");
    startTimer();
  }
}

function stopTimer() {
  clearInterval(timerId);
  START_BUTTON.disabled = false;
  STOP_BUTTON.disabled = true;
  // PROGRESS_BAR.value = 0;
  // document.querySelector(".progress-bar").style.animationPlayState = "paused"
  //document.querySelector(".progress-bar").classList.remove("active");
  if (timeLeft !== null) {
    currentTimer = timeLeft;
  }
}

// START_BUTTON.addEventListener("click", () => {
//   startTimer();
//   const audio = new Audio("yamade.mp3");
//   audio.play();
// });


// вынести в мапу таймерс
// !currenttimer
// чус брейк тайп мапа
// прогресс бар 

// function chooseBreakType() {
//   const choice = confirm("Хорошо поработал, отдохнем?");
//   if (choice) {
//     const breakType = confirm("Короткий перерыв?")
//       ? "short-break"
//       : "long-break";
//     setTimer(breakType);
//     startTimer();
//   } else {
//     setTimer("pomodoro");
//     startTimer();
//   }
// }

//мб 
//После каждых четырех таких сессий - длинный перерыв на 10 минут.





// const timers = {
//   "pomodoro": { duration: 25 * 60, animationDuration: 1500 },
//   "short-break": { duration: 5 * 60, animationDuration: 300 },
//   "long-break": { duration: 10 * 60, animationDuration: 600 }
// };



{
  
    // function setTimer(timer) {
      //   stopTimer();
      //   currentTimer = timers[timer].duration;
      //   timeLeft = currentTimer;
      //   updateTimer();
      
      //   // PROGRESS_BAR.style.setProperty('--animation-duration', `${timers[timer].animationDuration}s`);
      //   // PROGRESS_BAR.style.setProperty('--animation-duration', `${currentTimer}s`);
      // }
      
      //document.documentElement.style.setProperty('--current-timer',currentTimer);
      // progressBar.style.setProperty('--progress-max', currentTimer);
      
      // const htmlProgress = document.getElementById("html");
      // htmlProgress.max = currentTimer;
  }
  {
  // var i = 1;
  // var duration = timeLeft;
  // var interval = setInterval(function() {
  //   if (i > duration) {
  //     clearInterval(interval);
  //     return;
  //   }
  
  //   var k = ((i / duration) * 100);
  //   var l = 100 - k;
  
  //   C1_strokeDasharray.style.strokeDasharray = [l, k];
  //   C2_strokeDasharray.style.strokeDasharray = [k, l];
  //   C1_strokeDashoffset.style.strokeDashoffset = l;
  //   COUNTER_TEXT.innerHTML = duration - i;
  
  //   i++;
  // }, 1000);
  }