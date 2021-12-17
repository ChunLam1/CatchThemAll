import { Chronometer } from "./timer.js";

const rulesText = document.querySelector("rulesText-hidden");
const textId = document.getElementById("textId");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
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
//AUDIO
const sound = new Audio("./audio/backgroundTheme.mp3");
const sound2 = new Audio("./audio/sonTir.mp3");
const sound3 = new Audio("./audio/BombeSound.mp3");
const music = new Audio("./audio/Mainsong.mp3");

//image
const gif1 = "./img/pepeDanceMini.gif";
const gif2 = "./img/patrikgif.gif";
const gif3 = "./img/Dynamite.gif";
const gif4 = "./img/babyPatrick.gif";
let score = 0;

music.play();
music.loop = true;

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
  sound2.currentTime = 0;
  sound2.play();
  score += 20;
  point.innerHTML = score;
  this.remove();
}
function targetOnClick2() {
  sound2.currentTime = 0;
  sound2.play();
  score += 35;
  point.innerHTML = score;
  this.remove();
}
function targetOnClick3() {
  sound3.currentTime = 0;
  sound3.play();
  gameContent.style.visibility = "hidden";
  scoreContent.style.display = "block";
  winScore.style.visibility = "hidden";
  finalPoint.innerHTML = score;
  scoreMess(message);
}
function targetOnClick4() {
  sound2.currentTime = 0;
  sound2.play();
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

btn.onclick = targetOnClick;

//function that makes the target spawn randomly
function generation(imag, fonction, temps) {
  const div = document.createElement("div");
  div.classList.add("random");
  const img = document.createElement("img");
  img.setAttribute("src", imag);
  div.appendChild(img);
  gameContent.appendChild(div);
  div.onclick = fonction;
  div.style.left =
    Math.floor(Math.random() * (document.body.clientWidth - img.width + 1)) +
    "px";
  div.style.top =
    Math.floor(Math.random() * (document.body.clientHeight - img.height - 1)) +
    "px";
  setTimeout(() => {
    img.remove();
  }, temps);
}
// Normal mode after clicking on the START btn
function plaay() {
  // sound.volume = 1;
  sound.play();
  startGame.style.display = "none";
  gameContent.style.display = "block";
  chronometer.start(Timer);
  const intervalspawn = setInterval(() => {
    generation(gif1, targetOnClick, 2000);
  }, 1000);
  const intervalspawn2 = setInterval(() => {
    generation(gif2, targetOnClick2, 2000);
  }, 5000);
  const intervalspawn3 = setInterval(() => {
    generation(gif3, targetOnClick3, 2000);
  }, 3000);
  const intervalspawn4 = setInterval(() => {
    generation(gif4, targetOnClick4, 2000);
  }, 7000);
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
function mainSong() {
  music.pause();
}
btn1.addEventListener("click", mainSong);
btn3.addEventListener("click", mainSong);

btn1.addEventListener("click", plaay);
//INSANEMODE :)

function plaayInsaneMode() {
  // sound.volume = 1;
  sound.play();
  startGame.style.display = "none";
  gameContent.style.display = "block";
  chronometer.start(Timer);
  const intervalspawn = setInterval(() => {
    generation(gif1, targetOnClick, 1400);
  }, 800);
  const intervalspawn2 = setInterval(() => {
    generation(gif2, targetOnClick2, 2000);
  }, 1000);
  const intervalspawn3 = setInterval(() => {
    generation(gif3, targetOnClick3, 3000);
  }, 250);
  const intervalspawn4 = setInterval(() => {
    generation(gif4, targetOnClick4, 1500);
  }, 1500);
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

btn3.addEventListener("click", plaayInsaneMode);

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 250);
});
