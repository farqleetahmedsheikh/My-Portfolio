/** @format */

const textShowBox = document.getElementById("autoType");


const wordList = ["Student", "Programmer", "Front-End Dev", "Coder"];
let wordIndex = 0;
let wordListIndex = 0;
let reverseTyping = true;
let delay = 0;

setInterval(() => {
  let word = wordList[wordListIndex];
  if (delay) {
    delay--;
    return;
  }
  if (reverseTyping && wordIndex < word.length) {
    textShowBox.innerText += word[wordIndex];
    wordIndex++;
    delay = 1;
  } else {
    textShowBox.innerText = textShowBox.innerText.slice(0, wordIndex - 1);
    wordIndex--;
  }
  if (wordIndex === 0) {
    reverseTyping = true;
    wordIndex = 0;
    wordListIndex++;
  }
  if (wordIndex === word.length) {
    reverseTyping = false;
    delay = 3;
  }
  if (wordListIndex === wordList.length) {
    wordListIndex = 0;
  }
}, 200);