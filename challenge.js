document.addEventListener("DOMContentLoaded", () => {
  startTimer();
});

const counterH1 = document.getElementById("counter");
document.getElementById("minus").addEventListener("click", decrementTimer);
document.getElementById("plus").addEventListener("click", incrementTimer);
document.getElementById("heart").addEventListener("click", likeFx);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("submit").addEventListener("submit", submitFx);

function startTimer() {
  setInterval(function() {
    let currentSeconds = parseInt(counterH1.innerText, 10);
    counterH1.innerText = currentSeconds + 1;
  }, 1000);
}

function incrementTimer() {
  counterH1.innerText = parseInt(counterH1.innerText, 10) + 1;
}

function decrementTimer() {
  counterH1.innerText = parseInt(counterH1.innerText, 10) - 1;
}

function likeFx() {
  const time = parseInt(counterH1.innerText, 10);
  const timeInstance = document.querySelector(`li[data-id=${time}]`);
  if (timeInstance) {
    timeInstance.innerText;
  }
  const likesList = document.getElementsByClassName("likes");

  const li = document.createElement("li");
  li.innerText = `${time} has been liked <span>1 time`;
  li.setAttribute("data-id", time);

  likesList[0].appendChild(li);
}

function pauseTimer() {}

function submitFx() {}
