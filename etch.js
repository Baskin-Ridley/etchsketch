console.log("check")
var currentColor = "black"

function createGrid(size){ 
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
  board.style.gridTemplateRows = (`repeat(${size}, 1fr`);

  let gridSize = size * size
  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorGrid)
    board.insertAdjacentElement("beforeend", square);
  }
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display="none";
    createGrid(input);
  }
  else {
    document.querySelector(".error").style.display="flex";
  }
}

function clearGrid() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = ""));
}

createGrid(16)

function colorGrid(){

this.style.backgroundColor = currentColor
  
  
}

function setBlack() {
  return currentColor = "black";
}

function setWhite() {
  return currentColor = "white";
}