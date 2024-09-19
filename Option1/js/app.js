let button0Reference = document.getElementById("button0");

let playerRoll = 0;
let playerRollText = document.getElementById("playerRollText");

button0Reference.addEventListener("click", function() {
 getRandomNumberForPlayer();
 showPlayerRollText()
});


function getRandomNumberForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function showPlayerRollText() {
  playerRollText.innerText = playerRoll;
}
