const btnStart = document.querySelector("start");
const btnRules = document.querySelector("rules");
const rulesText = document.querySelector("rulesText-hidden");
const textId = document.getElementById("textId");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function loadRules() {
  textId.classList.toggle("rulesText-hidden");
  textId.classList.toggle("rulesText-visible");
}

btn2.addEventListener("click", loadRules);
// btnStart.addEventListener("click");
// btn2.addEventListener('click', function visible () {
//     if(textId.style.visibility ='hidden'){
//         textId.style.visibility ='visible'
//     }

// })
