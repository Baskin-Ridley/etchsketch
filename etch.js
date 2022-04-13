console.log("check")

function createGrid(size){ 
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
  board.style.gridTemplateRows = (`repeat(${size}, 1fr`);

  let gridSize = size * size
  for (let i = 0; i < gridSize; i++) {
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
