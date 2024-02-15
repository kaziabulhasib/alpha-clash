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

// get element value by id

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

// set element value by id

function setElementValueById(elementId, val) {
  const element = document.getElementById(elementId);
  element.innerText = val;
}
