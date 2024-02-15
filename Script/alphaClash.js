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

  // finish the game on clickng esc key
  if (playerPressed === "Escape") {
    gameOver();
  }

  // Get the expected to press

  const currentAlphabetElement = document.getElementById("set-alpha");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  if (playerPressed === expectedAlphabet) {
    continueGame();
    removeBgColor(expectedAlphabet);

    const currentScore = getElementValueById("current-score");
    const newScore = currentScore + 1;
    // currentScore.innerText = newScore; -------------------------------------why this line is not working.(bcz this function return a value not the element???)
    setElementValueById("current-score", newScore);

    // ------------------------------------------------------------------------
    // // ------------------------------------------------------------------------
    // // 1.set the score count
    // const scoreCountElement = document.getElementById("current-score");
    // const scoreCountText = scoreCountElement.innerText;
    // const scoreCount = parseInt(scoreCountText);
    // // 1.a new score
    // const newScore = scoreCount + 1;
    // scoreCountElement.innerText = newScore;
  } else {
    const currentLife = getElementValueById("current-life");
    const newLife = currentLife - 1;
    setElementValueById("current-life", newLife);

    // ----------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------
    // // 2. Set the life count
    // const lifeCountElement = document.getElementById("current-life");
    // const lifeCountText = lifeCountElement.innerText;
    // const lifeCount = parseInt(lifeCountText);
    // // 2.a  new life count
    // const newLife = lifeCount - 1;
    // lifeCountElement.innerText = newLife;

    // game over for negative value

    if (newLife === 0) {
      gameOver();
    }
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

// game over function -------
function gameOver() {
  hideElementById("play-scrn");
  showElementById("result-scrn");

  // Set final score.

  const finalScore = getElementValueById("current-score");
  setElementValueById("final-score", finalScore);

  // remove background.

  const lastAlphabetEl = document.getElementById("set-alpha");
  const lastAlphabet = lastAlphabetEl.innerText;
  removeBgColor(lastAlphabet);
}
function playNow() {
  // hide home screen & result screen
  hideElementById("home-scrn");
  hideElementById("result-scrn");
  showElementById("play-scrn");

  // set life=5 and score =0
  setElementValueById("current-life", 5);
  setElementValueById("current-score", 0);
  continueGame();
}
