const gridContainer = document.querySelector("#grid-container");
const numInput = document.querySelector("#num-input");
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", setResolution) 
const gridSize = 720;
const rowsCols = 16;
let userInput = 0;

gridContainer.style.width = `${gridSize}px`;
gridContainer.style.height = `${gridSize}px`;


function changeBgColor() {
  this.style.backgroundColor = "black";
}

submitBtn.addEventListener("click", setResoulution)

function setResoulution() {
  if(numInput.value < 2 || numInput.value > 100) {
    alert("Opps! Please enter a number between 2 and 100");
    numInput.value = "";
  }

  userInput = numInput.value;
};


function getGrid(rowsCols) {
  for (let i = 0; i < (rowsCols * rowsCols); i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${(gridSize / rowsCols) - 2}px`
    gridCell.style.height = `${(gridSize / rowsCols) - 2}px`
    gridCell.classList.add("cells");

    gridContainer.appendChild(gridCell);
    gridCell.addEventListener("mousemove", changeBgColor)
  }
}

function removeGridcell () {
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}



getGrid(numInput.value)

function setResolution() {
  if(numInput.value < 2 || numInput.value > 100 ) {
    alert("Opps! Please enter a number between 2 and 100.")
    numInput.value = " ";
  }

  removeGridcell()
  getGrid(numInput.value);
}