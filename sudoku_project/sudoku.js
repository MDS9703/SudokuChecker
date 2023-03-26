// function getRow (sudokuGrid, rowIndex){
//     return sudokuGrid[rowIndex];
// }

// function getColumn (sudokuGrid, columnIndex){
//     return sudokuGrid[columnIndex];
// }
// function getSection (sudokuGrid, xIndex, yIndex){
//     return sudokuGrid[xIndex][yIndex];
// }

let numSelected = null;
let tileSelected = null;

let errors = 0;

let board = [
  "--57421-6",
  "2---6-4-5",
  "-----1-9-",
  "-346----8",
  "--7----6-",
  "--24--371",
  "1-9-7---3",
  "74-32----",
  "32--96---",
];

let solutionBoard = [
  "895742136",
  "271963485",
  "463581792",
  "934617258",
  "517238964",
  "682459371",
  "159874623",
  "746325819",
  "328196547",
];

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }
//  Board
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (board[r][c] != "-"){
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }
      if (r == 2 || r == 5) {
        tile.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectTile(){
  if (numSelected){
    if (this.innerText != ""){
      return;
    }
    
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if(solutionBoard[r][c] == numSelected.id){
      this.innerText = numSelected.id;
    }
    else{
      errors += 1;
      document.getElementById("errors").innerText = errors;
    }
  }
}
