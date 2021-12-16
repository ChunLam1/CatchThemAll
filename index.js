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
const btn = document.getElementById("firstFrog");
const point = document.getElementById("point");
const gameContent = document.getElementById("gameContent");
// let random ="random";
// let src = "src";
// let im = "./img/pepeDanceMini.gif"

// ScoreContent
const scoreContent = document.getElementById("scoreBoard");
const finalPoint = document.getElementById("finalPoint");
const finalPoint2 = document.getElementById("finalPoint2");
const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const winScore = document.getElementById("winScore");
const mainPage = document.getElementById("mainPage");
const mainPage2 = document.getElementById("mainPage2");

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
  // generation(random,src,im);
  // generation();
}
function targetOnClick2() {
  score += 35;
  point.innerHTML = score;
  this.remove();
}
function targetOnClick3() {
  gameContent.style.visibility = "hidden";
  scoreContent.style.display = "block";
  winScore.style.visibility = "hidden";
  finalPoint.innerHTML = score;
  scoreMess(message);
}
function targetOnClick4() {
  score += 45;
  point.innerHTML = score;
  this.remove();
}
function timeUp() {
  gameContent.style.display = "none";
  winScore.style.display = "block";
  finalPoint2.innerHTML = score;
  scoreMess(message2);
}
function scoreMess(mess) {
  if (score >= 500) {
    mess.textContent = "Hey ! You are doing great !";
  } else mess.textContent = "You are so noob !! Go training !!!";
}
function goMainPage() {
  window.location.reload();
}
mainPage.addEventListener("click", goMainPage);
mainPage2.addEventListener("click", goMainPage);
// function timeUp() {
//   if (seconde.textContent = "00:27"){
//     gameContent.style.visibility = "hidden";
//     scoreContent.style.visibility = "visible";
//   }
// }
// setTimeout (()=>{clearInterval(intervalspawn)},5000);
btn.onclick = targetOnClick;

//function that makes the target spawn randomly
function generation() {
  const div = document.createElement("div");
  div.classList.add("random");
  const img = document.createElement("img");
  img.setAttribute("src", "./img/pepeDanceMini.gif");
  div.appendChild(img);
  gameContent.appendChild(div);
  div.onclick = targetOnClick;
  // Math.floor(Math.random()*(max-min+1)+min)
  div.style.left =
    Math.floor(
      Math.random() * (document.body.clientWidth - img.clientWidth + 1)
    ) + "px";
  div.style.top =
    Math.floor(
      Math.random() * (document.body.clientHeight - img.clientHeight - 1)
    ) + "px";
  // img.onclick = (evt) => {
  //   setTimeout(()=>{evt.target.remove();},2000)
  // }
  setTimeout(() => {
    img.target.remove();
  }, 2000);
}
function generation2() {
  const div = document.createElement("div");
  div.classList.add("random");
  const img = document.createElement("img");
  img.setAttribute("src", "./img/patrikgif.gif");
  div.appendChild(img);
  gameContent.appendChild(div);
  div.onclick = targetOnClick2;
  // Math.floor(Math.random()*(max-min+1)+min)
  div.style.left =
    Math.floor(
      Math.random() * (document.body.clientWidth - img.clientWidth + 1)
    ) + "px";
  div.style.top =
    Math.floor(
      Math.random() * (document.body.clientHeight - img.clientHeight + 1)
    ) + "px";
}
function generationDynamite() {
  const div = document.createElement("div");
  div.classList.add("random");
  const img = document.createElement("img");
  img.setAttribute("src", "./img/Dynamite.gif");
  div.appendChild(img);
  gameContent.appendChild(div);
  div.onclick = targetOnClick3;
  // Math.floor(Math.random()*(max-min+1)+min)
  div.style.left =
    Math.floor(
      Math.random() * (document.body.clientWidth - img.clientWidth + 1)
    ) + "px";
  div.style.top =
    Math.floor(
      Math.random() * (document.body.clientHeight - img.clientHeight + 1)
    ) + "px";
}
function generationBabyPat() {
  const div = document.createElement("div");
  div.classList.add("random");
  const img = document.createElement("img");
  img.setAttribute("src", "./img/babyPatrick.gif");
  div.appendChild(img);
  gameContent.appendChild(div);
  div.onclick = targetOnClick4;
  // Math.floor(Math.random()*(max-min+1)+min)
  div.style.left =
    Math.floor(
      Math.random() * (document.body.clientWidth - img.clientWidth + 1)
    ) + "px";
  div.style.top =
    Math.floor(
      Math.random() * (document.body.clientHeight - img.clientHeight + 1)
    ) + "px";
}
function play() {
  startGame.style.display = "none";
  gameContent.style.display = "block";
  chronometer.start(Timer);
  const intervalspawn = setInterval(generation, 1100);
  const intervalspawn2 = setInterval(generation2, 5000);
  const intervalspawn3 = setInterval(generationDynamite, 6500);
  const intervalspawn4 = setInterval(generationBabyPat, 7000);

  setTimeout(() => {
    clearInterval(intervalspawn);
  }, 30000);
  setTimeout(() => {
    clearInterval(intervalspawn2);
  }, 30000);
  setTimeout(() => {
    clearInterval(intervalspawn3);
  }, 30000);
  setTimeout(() => {
    clearInterval(intervalspawn4);
  }, 30000);
  const endGame = setTimeout(timeUp, 32000);
}
btn1.addEventListener("click", play);
