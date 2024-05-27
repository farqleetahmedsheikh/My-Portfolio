const boxes = document.querySelectorAll(".boxes"); // getting boxes from HTML
let turnX = true; // Setting  the first player as X
const msg = document.getElementById("msg"); // getting msg box to display text
const resetBtn = document.getElementById("reset-btn"); // getting reset button to reset the game

const winingPositions = [
  // declaring winning positions
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to check who is winnner
const checkForWiner = () => {
  for (let position of winingPositions) {
    //console.log(position[0], position[1], position[2]);
    //console.log(boxes[position[0]], boxes[position[1]], boxes[position[2]]);
    // Getting the  values of each index in the array
    let pos1Val = boxes[position[0]].innerText;
    let pos2Val = boxes[position[1]].innerText;
    let pos3Val = boxes[position[2]].innerText;

    //console.log(pos1Val, pos2Val, pos3Val);
    //comparing the all values if they are equal or not
    if (pos1Val !== "" && (pos2Val !== "") & (pos3Val !== "")) {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        //console.log("Winner is", pos1Val);
        // Printing the winner
        msg.innerText = `Winner is Player ${pos1Val}`;
        boxes.forEach((box) => {
          // disable all the boxes after someone wins
          box.disabled = true;
        });
      }
    }
  }
};
// Acessing all boxes
boxes.forEach((box) => {
  // Adding event click on each box to track them
  box.addEventListener("click", () => {
    if (turnX === true) {
      box.innerText = "X"; // Printing O on Web Page
      turnX = false; // setting to turn O
      msg.innerText = "Player O Turn"; // Displaying the msg
    } else {
      box.innerText = "O"; // Printing O on Web Page
      turnX = true; // setting to turn X
      msg.innerText = "Player X Turn"; // Displaying the msg
    }
    // disable that box after choosing
    box.disabled = true;
    checkForWiner(); //Calling function  to see if there's a Winner or Not!
  });
});

resetBtn.addEventListener("click", () => {
  location.reload(); // reload the web page onclick of reset button
});

//console.log(boxes);
