let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");
let newbutton = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnX = true;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnX = true;
  enableBoxes();
  msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    }
    else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}
const showWinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = (() => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }

});

newbutton.addEventListener("click", resetgame);
resetbutton.addEventListener("click", resetgame); git 