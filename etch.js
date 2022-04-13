console.log("check")

function createGrid (size){ 
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = "repeat(16, 1fr)";
  board.style.gridTemplateRows = "repeat(16, 1fr)";

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = "yellow";
    })
    board.insertAdjacentElement("beforeend", square);
  }
}


function clearGrid() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

createGrid(16)
