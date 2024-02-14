function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.slice("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const randomAlphabet = alphabets[index];
  return randomAlphabet;
}

function setBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
