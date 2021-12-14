import { Chronometer } from "./timer.js";

const btnStart = document.querySelector("start");
const btnRules = document.querySelector("rules");
const rulesText = document.querySelector("rulesText-hidden");
const textId = document.getElementById("textId");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const startGame = document.getElementById("startGame");
// Chronometer content //
const chronometer = new Chronometer();
const seconde = document.getElementById("seconde");
//gameContent//
const btn = document.getElementById("gameBtn");
const point = document.getElementById("point");
const gameContent = document.getElementById("gameContent");

let score = 0;

function loadRules() {
  textId.classList.toggle("rulesText-hidden");
  textId.classList.toggle("rulesText-visible");
}
btn2.addEventListener("click", loadRules);

function Timer() {
  const scd = chronometer.getSeconds();
  seconde.innerHTML = `00:${scd}`;
  if (scd === "00") chronometer.stop();
}

// gameContent//
function targetOnClick() {
  score += 20;
  point.innerHTML = score;
  this.remove();
  generation();
}
btn.onclick = targetOnClick;

function generation() {
  const div = document.createElement("div");
  div.classList.add("random");
  const img = document.createElement("img");
  img.setAttribute("src", "./img/pepeDanceMini.gif");
  div.appendChild(img);
  gameContent.appendChild(div);
  div.onclick = targetOnClick;
  // Math.floor(Math.random()*(max-min+1)+min)
  div.style.left = Math.floor(Math.random() * (document.body.clientWidth-img.clientWidth + 1)) + "px";
  div.style.top = Math.floor(Math.random() * (document.body.clientHeight-img.clientHeight - 1)) + "px";
}

function play() {
  startGame.style.display = "none";
  gameContent.style.display = "";
  chronometer.start(Timer);
}
btn1.addEventListener("click", play);

// function
//add Timer //
//add score//
//add bottle//
