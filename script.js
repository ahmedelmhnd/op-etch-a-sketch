const contianer = document.querySelector(".grid-container")


let gridSize = 16;

for (let i = 0; i < gridSize; i++) 
{
    let row = document.createElement("div");
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
            pixel.style.cssText += "background-color: red;"
        });
    }
    
}

/*const pixels = document.querySelectorAll(pixel);
pixels.forEach(element => 
{
    element.addEventListener("mouseenter", (event) => {});
});*/
