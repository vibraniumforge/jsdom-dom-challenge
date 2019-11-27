document.addEventListener("DOMContentLoaded", () => {
  addEventListenersMethod();
});

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.getElementsByClassName("likes")[0];
const submitForm = document.getElementById("comment-form");
const submitBtn = document.getElementById("submit");
const commentList = document.getElementById("list");
const counterH1 = document.getElementById("counter");

function addEventListenersMethod() {
  submitForm.addEventListener("submit", () => submitFx(event));
  minus.addEventListener("click", decrementTimer);
  plus.addEventListener("click", incrementTimer);
  heart.addEventListener("click", loveFx);
  pause.addEventListener("click", pauseFx);
}

let timer = setInterval(function() {
  counterH1.innerText++;
}, 1000);

function pauseFx() {
  if (pause.innerText === "pause") {
    pause.innerText = "resume";
    clearInterval(timer);
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submitBtn.disabled = true;
  } else {
    pause.innerText = "pause";
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submitBtn.disabled = false;
    timer = setInterval(function() {
      counterH1.innerText++;
    }, 1000);
  }
}

function incrementTimer() {
  counterH1.innerText = parseInt(counterH1.innerText, 10) + 1;
}

function decrementTimer() {
  counterH1.innerText = parseInt(counterH1.innerText, 10) - 1;
}

function loveFx() {
  const time = document.getElementById(`${counterH1.innerText}`);
  if (time) {
    time.children[0].innerText++;
  } else {
    likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`;
  }
}

function submitFx(event) {
  event.preventDefault();
  const commentList = document.getElementById("list");
  const comment = document.getElementById("comment-input");

  const p = document.createElement("p");
  p.innerText = comment.value;

  //   comment.value = "";

  submitForm.reset();

  commentList.appendChild(p);
}
