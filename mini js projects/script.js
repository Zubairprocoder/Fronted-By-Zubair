console.log("Build a Pomodoro clock in js");
let timer = document.querySelector(".timer");
let title = document.querySelector(".title");
let startbtn = document.querySelector(".startbtn");
let Pausebtn = document.querySelector(".Pausebtn");
let Resumebtn = document.querySelector(".Resumebtn");
let Resetbtn = document.querySelector(".Resetbtn");
let pomocountsdisplay = document.querySelector(".pomocountsdisplay");

// make varibales
const work_time = 2 * 60;
const break_time = 0.5 * 60;
let timerID = null;
let oneroundcompleted = false;
let pasued = false;
let updatetitle = (msg) => {
  title.textContent = msg;
};
let totalcount = 0;
const saveloacalcounts = () => {
  let counts = JSON.parse(localStorage.getItem("pomocounts"));
  counts !== null ? counts++ : (counts = 1);
  localStorage.setItem("pomocounts", JSON.stringify(counts));
};
const countdown = (time) => {
  return () => {
    const mins = Math.floor(time / 60)
      .toString()
      .padStart("2", 0);
    const secs = Math.floor(time % 60)
      .toString()
      .padStart("2", 0);
    timer.textContent = `${mins}:${secs}`;
    time--;
    if (time < 0) {
      stopTimer();
      if (!oneroundcompleted) {
        timerID = startTimer(break_time);
        oneroundcompleted = true;
        updatetitle("It's Break Time!");
      } else {
        updatetitle(" Completed 1 Round of Pomodoro Technique!");
        setTimeout(() => {
          updatetitle("Start Timer Again");
        }, 5000);
        totalcount++;
        saveloacalcounts();
        showpomocounts();
      }
    }
  };
};
const startTimer = (starttime) => {
  if (timerID !== null) {
    stopTimer();
  }
  return setInterval(countdown(starttime), 1000);
};
const stopTimer = () => {
  clearInterval(timerID);
  timerID = null;
};
const getTimeInSeconds = (timestring) => {
  const [minutes, seconds] = timestring.split(":");
  return parseInt(minutes * 60) + parseInt(seconds);
};
startbtn.addEventListener("click", () => {
  timerID = startTimer(work_time);
  updatetitle("It's work Time!");
});
Resetbtn.addEventListener("click", () => {
  stopTimer();
  timer.textContent = "25:00";
  updatetitle("Click start to start timer");
});
Pausebtn.addEventListener("click", () => {
  stopTimer();
  pasued = true;
  updatetitle("Timer Paused");
});
// Adding event listener to resume button
Resumebtn.addEventListener("click", () => {
  if (pasued) {
    const currentTime = getTimeInSeconds(timer.textContent);
    timerID = startTimer(currentTime);
    pasued = false;
    !oneroundcompleted
      ? updatetitle("It's Work time")
      : updatetitle("It's Break time");
  }
});
const showpomocounts = () => {
  const counts = localStorage.getItem("pomocounts");
  console.log(counts);
  if (counts > 0) {
    pomocountsdisplay.style.display = "flex";
  }
  pomocountsdisplay.firstElementChild.textContent = counts;
};
showpomocounts();
