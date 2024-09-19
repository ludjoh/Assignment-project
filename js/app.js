const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

const increaseScoreButton = document.getElementById("button0");

let score = 0;

increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText()
  checkScoreForSeven()
})

function increaseScoreByOne() {
  score++;
}

function checkScoreForSeven() {
  if (score >= 7) {
    changeScoreTextColorToGreen()
  }
}

function updateScoreText() {
  textField0.innerHTML = "Your score is: " +score+ "";
}

function changeScoreTextColorToGreen () {
  textField0.style.color = "Green";
}
