let gridContainer = document.querySelector('.grid-container');
let clearButton = document.querySelector('.clear-btn');
let customButton = document.querySelector('.custom-btn');
let grid = gridContainer.children;
for(let i = 0; i<256; i++)
{
    let div = document.createElement('div')
    div.addEventListener('mouseover', ()=>
    {
        // randomising color to change to when hovered over
        let a = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let c = Math.floor(Math.random()*255);
        div.style.backgroundColor = `rgb(${a},${b},${c})`;
    })
    div.className = 'grid';
    gridContainer.append(div);
}

clearButton.addEventListener('click', ()=> {
    for(let i=0; i<grid.length; i++)
    {
        console.log(grid.length)

        grid[i].style.backgroundColor = 'white';
    }
})

function createGrid() {
    let gridSize = prompt('Please enter a number between 1 and 100');
    if(gridSize<1 || gridSize >100)
    {
        alert("Please enter a valid input!")
    }
    else{
        let numberOfGrids = gridSize*gridSize;
        gridContainer.innerHTML="";
        for(let i=0; i<numberOfGrids; i++)
        {
            let div = document.createElement('div')
            div.addEventListener('mouseover', ()=>
            {
                // randomising color to change to when hovered over
                let a = Math.floor(Math.random()*255);
                let b = Math.floor(Math.random()*255);
                let c = Math.floor(Math.random()*255);
                div.style.backgroundColor = `rgb(${a},${b},${c})`;
            })
            div.className = 'grid';
            gridContainer.append(div);
        }
    }
}
customButton.addEventListener('click', ()=>{
    createGrid();
})