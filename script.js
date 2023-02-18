let gridContainer = document.querySelector('.grid-container');
let columns = gridContainer.getElementsByClassName('grid');
let gridContainerWidth = 500;

function createGrid(size) {
    let gridDimensions = size*size;
    let gridSize = (gridContainerWidth/size)-2;
    for(let i = 0; i<gridDimensions; i++)   {
        let div = document.createElement('div');
        div.classList.add('grid')
        div.style.width = `${gridSize}px`;
        div.style.height = `${gridSize}px`;
        gridContainer.append(div);
    }

}

createGrid(4);

const rainbowButton = document.querySelector('.rainbow')
rainbowButton.addEventListener('click', () => {
    for(let i = 0; i<columns.length; i++) {
        columns[i].addEventListener('mouseover', () => {
            let red = Math.floor(Math.random()*255);
            let green = Math.floor(Math.random()*255);
            let blue = Math.floor(Math.random()*255);
            columns[i].style.backgroundColor = `rgb(${red},${green},${blue})`;
        });
    }
});

const customButton = document.querySelector('.custom');
customButton.addEventListener('click', () => {
    let input = prompt('Please enter a value between 1 and a 100');
    if(input < 1 || input > 100)    {
        alert('Please input a valid number');
    }
    else {
        gridContainer.innerHTML = "";
        createGrid(input);
    }
});

const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', () => {
    for(let i = 0; i<columns.length; i++) {
        columns[i].addEventListener('mouseover', () => {
            columns[i].style.backgroundColor = 'rgb(0,0,0)';
        });
}});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    for(let i = 0; i<columns.length; i++) {
            columns[i].style.backgroundColor = 'rgb(255,255,255)';
        }
})
