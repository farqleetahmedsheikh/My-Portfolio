let userScore = 0;
let compScore = 0;
let msg = document.getElementById("msg");
const showCompScore = document.getElementById("comp-score");
const showUserScore = document.getElementById("user-score");

let choices = document.querySelectorAll(".option");

// Computer Playing or choosing
const CompPlay = () => {
  const options = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

// Check is user win and also upadtong the score
const isWin = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    msg.innerText = "It's a Tie! Try Again";
    msg.style.backgroundColor = "#001845";
  } else {
    if (userChoice === "rock") {
      if (compChoice === "scissor") {
        userScore++;
        showUserScore.innerText = userScore;
        msg.textContent = `You Win! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor = "green";
      } else {
        compScore++;
        showCompScore.innerText = compScore;
        msg.textContent = `You Loose! Computer ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
      }
    } else if (userChoice === "scissor") {
      if (compChoice === "paper") {
        userScore++;
        showUserScore.innerText = userScore;
        msg.textContent = `You Win! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor = "green";
      } else {
        compScore++;
        showCompScore.innerText = compScore;
        msg.textContent = `You Loose! Computer ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
      }
    } else {
      if (compChoice === "rock") {
        userScore++;
        showUserScore.innerText = userScore;
        msg.textContent = `You Win! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor = "green";
      } else {
        compScore++;
        showCompScore.innerText = compScore;
        msg.textContent = `You Loose! Computer ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
      }
    }
  }
};
// Main Function Of Playing Game

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Getting User Choice
    console.log(userChoice);
    const compChoice = CompPlay(); // Getting Comp User
    console.log(compChoice);
    isWin(userChoice, compChoice); // Checking If User Won Or Not
  });
});
