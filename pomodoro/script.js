const POMODORO_BUTTON = document.getElementById("pomodoro");
const SHORTBREAK_BUTTON = document.getElementById("short-break");
const LONGBREAK_BUTTON = document.getElementById("long-break");
const TIMER_ELEMENT = document.getElementById("timer");
const PROGRESS_BAR = document.getElementById("html");
const START_BUTTON = document.getElementById("start");
const STOP_BUTTON = document.getElementById("stop");


POMODORO_BUTTON.addEventListener("click", setTimer.bind(null, "pomodoro"));
SHORTBREAK_BUTTON.addEventListener("click", setTimer.bind(null, "short-break"));
LONGBREAK_BUTTON.addEventListener("click", setTimer.bind(null, "long-break"));
STOP_BUTTON.addEventListener("click", stopTimer);

const timers = {
  pomodoro: 25*60,
  "short-break": 5 * 60,
  "long-break": 10 * 60,
};

let currentTimer = null;
let timeLeft = null;
let timerId = null;

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.setProperty('--progress-value', (1 - timeLeft / 1500).toFixed(2));
  //progressBar.classList.add('active');

  PROGRESS_BAR.value = timeLeft;
  TIMER_ELEMENT.innerText = `${minutes}:${seconds}`;
  document.getElementById("progress-counter").innerText = `${minutes}:${seconds}`;
};

function setTimer(timer) {
  currentTimer = timers[timer];
  timeLeft = timers[timer];
  updateTimer();
}

function startTimer() {
  START_BUTTON.disabled = true;
  STOP_BUTTON.disabled = false;

  if (currentTimer !== null) {
    timeLeft = currentTimer;
  } else {
    timeLeft = timers["pomodoro"];
  }

  let progressBar = document.querySelector('.progress-bar');
  progressBar.classList.add('active');

  timerId = setInterval(() => {
    timeLeft--;

    if (timeLeft === 0) {
      clearInterval(timerId);
      timeLeft = null;
      START_BUTTON.disabled = false;
      STOP_BUTTON.disabled = true;
      chooseBreakType();
    }

    updateTimer();
  }, 1000);
}
function chooseBreakType() {
  const choice = confirm("Хорошо поработал, отдохнем?");
  const breakTypes = ["short-break", "long-break"];
  let breakChosen = false;

  if (choice) {
    const breakType = breakTypes.map((type) => {
      if (!breakChosen && confirm(`Выберите тип перерыва: ${type}?`)) {
        breakChosen = true;
        return type;
      }
      return null;
    }).find(Boolean);

    if (breakType) {
      setTimer(breakType);
      startTimer();
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

  if (timeLeft !== null) {
    currentTimer = timeLeft;
  }
}

START_BUTTON.addEventListener("click", () => {
  startTimer();
  const audio = new Audio("yamade.mp3");
  audio.play();
});

// вынести в мапу таймерс
// !currenttimer
// чус брейк тайп мапа
// прогресс бар компонент

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