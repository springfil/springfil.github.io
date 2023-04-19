/*
let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let timerShow = document.getElementById("timer");

buttonRun.addEventListener("click", function () {
  timeMinut = parseInt(timerInput.value) * 60;
});


let timerId = setInterval(function () {
  let seconds = timeMinut % 60;
  let minutes = (timeMinut / 60) % 60;
  let hour = (timeMinut / 60 / 60) % 60;

  if (timeMinut <= 0) {
    clearInterval(timerId);
    alert("Отсчет остановлен");
  } else {
    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    timerShow.innerHTML = strTimer;
  }

  --timeMinut;

}, 1000);

buttonStop.addEventListener("click", () => {
    clearInterval(timerId);
    alert("нажал стоп");
})
*/

let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let timerShow = document.getElementById("timer");

let timerId;

buttonRun.addEventListener("click", function () {
    if (!timerId) {
        let timeMinut = parseInt(timerInput.value) * 60;

        timerId = setInterval(function () {
            let seconds = timeMinut % 60;
            let minutes = (timeMinut / 60) % 60;
            let hour = (timeMinut / 60 / 60) % 60;

            if (timeMinut <= 0) {
                clearInterval(timerId);
                timerId = null;
                alert("Отсчет остановлен");
            } else {
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                timerShow.innerHTML = strTimer;
            }

            --timeMinut;

        }, 1000);
    }
});

buttonStop.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    alert("Отсчет остановлен");
});
