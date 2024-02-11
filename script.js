const contianer = document.querySelector(".grid-container")

const resizeButton = document.querySelector(".resize");
let gridSize = 16;

resizeButton.addEventListener("click", () => 
{
    clearGrid();
    gridSize = prompt("Please choose a new size. (range: 1:100)");
    buildGrid(gridSize);
});


buildGrid(gridSize);



function buildGrid(gridSize) 
{
    for (let i = 0; i < gridSize; i++) 
{
    let row = document.createElement("div");
    row.classList.add("rows");
    row.style.cssText = "flex: 1; display: flex; flex-direction: column;";
    contianer.appendChild(row);
    for (let i = 0; i < gridSize; i++) 
    {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.cssText = "background-color: white; flex: 1; border: solid 1px grey;";
        row.appendChild(pixel);
        pixel.addEventListener("mouseenter", () => 
        {
            let  r = getRandomInt(256);
            let g = getRandomInt(256);
            let b = getRandomInt(256);
            pixel.style.cssText += "background-color: rgb(" + r + "," + g + "," + b + ");";
        });
    }
    
}
}

function clearGrid() 
{
    const rows = document.querySelectorAll(".rows");

    rows.forEach(element => {
        element.remove();
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }