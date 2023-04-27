const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const countdownDiv = document.getElementById("countdown");

let countdown;
let remainingMilliseconds; // переменная для сохранения оставшегося времени на таймере

function antiPaste(e) {
  const clipboardData = e.clipboardData.getData("text/plain");// получили текст скопированный в буфер
  const regex = /^-?\d*\.?\d+$/g; // .number -number

  if (regex.test(clipboardData)) { 
    e.preventDefault();
    alert("Нельзя вставить такое число");
  }
}

hoursInput.addEventListener("paste", antiPaste);
minutesInput.addEventListener("paste", antiPaste);
secondsInput.addEventListener("paste", antiPaste);

function startCountdown() {
  const hours = Number(hoursInput.value);
  const minutes = Number(minutesInput.value);
  const seconds = Number(secondsInput.value);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    isNaN(seconds) ||
    hours < 0 ||
    minutes < 0 ||
    seconds < 0
  ) {
    alert("Введите корректные значения для времени!");
    return;
  }

  let totalMilliseconds;
  if (remainingMilliseconds) {
    // если время было остановлено, используем сохраненное время
    totalMilliseconds = remainingMilliseconds;
  } else {
    totalMilliseconds = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  }

  countdownDiv.innerHTML = formatCountdown(totalMilliseconds);

  countdown = setInterval(() => {
    totalMilliseconds--;

    if (totalMilliseconds < 0) {
      clearInterval(countdown);
      countdownDiv.innerHTML = "0:00:00.000";
      return;
    }

    countdownDiv.innerHTML = formatCountdown(totalMilliseconds);

    if (totalMilliseconds == 0) {
      clearInterval(countdown);
      countdownDiv.innerHTML = "Время вышло!";
    }
  }, 1);
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

function stopCountdown() {
  clearInterval(countdown);
}

function resetCountdown() {
  clearInterval(countdown);
  countdownDiv.innerHTML = "";
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;
  remainingMilliseconds = null; // обнуляем сохраненное время при сбросе таймера
}

startButton.addEventListener("click", startCountdown);
stopButton.addEventListener("click", stopCountdown);
resetButton.addEventListener("click", resetCountdown);
