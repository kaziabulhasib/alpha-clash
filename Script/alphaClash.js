// function playNow() {
//   const homeScreen = document.getElementById("home-scrn");
//   // homeScreen.setAttribute("class", "hidden");
//   homeScreen.classList.add("hidden");
//   const playScreen = document.getElementById("play-scrn");
//   playScreen.removeAttribute("class", "hidden");
// }

// check the button, handle the score count and life count

function handleTheKeyUPEvent(event) {
  const playerPressed = event.key;

  // Get the expected to press

  const currentAlphabetElement = document.getElementById("set-alpha");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  if (playerPressed === expectedAlphabet) {
    continueGame();
    removeBgColor(expectedAlphabet);
    // 1.set the score count
    const scoreCountElement = document.getElementById("current-score");
    const scoreCountText = scoreCountElement.innerText;
    const scoreCount = parseInt(scoreCountText);
    // 1.a new score
    const newScore = scoreCount + 1;
    scoreCountElement.innerText = newScore;
  } else {
    // 2. Set the life count

    const lifeCountElement = document.getElementById("current-life");
    const lifeCountText = lifeCountElement.innerText;
    const lifeCount = parseInt(lifeCountText);
    // 2.a  new life count
    const newLife = lifeCount - 1;
    lifeCountElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handleTheKeyUPEvent);

// ######################

function continueGame() {
  const alphabet = getARandomAlphabet();

  // set the alphabet to the screen
  const setAlpha = document.getElementById("set-alpha");
  setAlpha.innerText = alphabet;

  // set background color
  setBgColor(alphabet);
}
function playNow() {
  hideElementById("home-scrn");
  showElementById("play-scrn");
  continueGame();
}
