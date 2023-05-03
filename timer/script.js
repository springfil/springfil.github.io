const HOURS_INPUT = document.getElementById("hours");
const MINUTES_INPUT = document.getElementById("minutes");
const SECONDS_INPUT = document.getElementById("seconds");
const START_BUTTON = document.getElementById("start");
const STOP_BUTTON = document.getElementById("stop");
const RESET_BUTTON = document.getElementById("reset");
const COUNT_DOWN_DIV = document.getElementById("countdown");

let countdown;
let remainingMilliseconds;

function antiPaste(e) {
  const clipboardData = e.clipboardData.getData("text/plain"); 
  const regex = /^-?\d*\.?\d+$/g; 

  if (regex.test(clipboardData)) {
    e.preventDefault();
    alert("Нельзя вставить такое число");
  }
}

function handleInput(event) {
  if (event.keyCode === 189 || (this.value === "" && event.keyCode === 109)) {
    event.preventDefault();
  }
}

[HOURS_INPUT, MINUTES_INPUT, SECONDS_INPUT].forEach((input) => {
  input.addEventListener("keydown", handleInput);
});

[HOURS_INPUT, MINUTES_INPUT, SECONDS_INPUT].forEach((input) => {
  input.addEventListener("paste", antiPaste);
});

function validateTime(...times) {
  if (times.every((time) => Number.isNaN(time) || time < 0)) {
    alert("Введите корректные значения для времени!");
    return false;
  }
  return true;
}

function startCountdown() {
  clearInterval(countdown);

  const [hours, minutes, seconds] = [
    HOURS_INPUT,
    MINUTES_INPUT,
    SECONDS_INPUT,
  ].map((input) => input.value);

  if (hours == 0 && minutes == 0 && seconds == 0) {
    alert("Введите время!");
    return;
  }

  if (!validateTime(hours, minutes, seconds)) {
    return;
  }

  let totalMilliseconds;
  if (remainingMilliseconds) {
    totalMilliseconds = remainingMilliseconds;
  } else {
    totalMilliseconds = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  }

  COUNT_DOWN_DIV.innerHTML = formatCountdown(totalMilliseconds);

 countdown = setInterval(() => {
    totalMilliseconds -= 15;

    if (totalMilliseconds <= 0) {
      clearInterval(countdown);
      COUNT_DOWN_DIV.innerHTML = "Время вышло!";
      return;
    }

    COUNT_DOWN_DIV.innerHTML = formatCountdown(totalMilliseconds);
  }, 15);
}

function formatCountdown(totalMilliseconds) {
  const hours = Math.floor(totalMilliseconds / (60 * 60 * 1000));
  remainingMilliseconds = totalMilliseconds % (60 * 60 * 1000);
  const minutes = Math.floor(remainingMilliseconds / (60 * 1000));
  const remainingSeconds = remainingMilliseconds % (60 * 1000);
  const seconds = Math.floor(remainingSeconds / 1000);
  const milliseconds = remainingSeconds % 1000;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
    .toString()
    .padStart(3, "0")}`;
}

function resetCountdown() {
  clearInterval(countdown);
  COUNT_DOWN_DIV.innerHTML = "";
  [HOURS_INPUT, MINUTES_INPUT, SECONDS_INPUT].forEach(
    (input) => (input.value = 0)
  );
  remainingMilliseconds = null; 
}

START_BUTTON.addEventListener("click", startCountdown);
STOP_BUTTON.addEventListener("click", () => clearInterval(countdown));
RESET_BUTTON.addEventListener("click", resetCountdown);

{
  /*
  upper pitoncase +
  numberisnan - вынести проверку в переменную и извалидинпут +
  сдеелать синглреспосибилити - функции отвечали +-
  onkeydown в скрипт +
  
  формат коунтдеструктурировал 
  подумать как сделать без реманинг /вызвать функцию на 46-й строке
  оповестить ,что нельзя нажать старт 
  дизейбл кнопок 
  
  На следующий синк 
  //свой помодоро таймер 
  // есть помидорка свгшка 
  pfy
*/
}
