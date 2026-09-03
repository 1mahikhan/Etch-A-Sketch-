console.log("script loaded");

const container = document.getElementById('grid-container');

const size = prompt("Enter the size of the grid (e.g., 16 for a 16x16 grid):");

const totalDivs = size * size;
for (let i = 0; i < totalDivs; i++) {
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
}
// 1. Function to generate a random hex color
function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

// 2. Select your element and apply the color
const myElement = document.getElementById('my-element'); 
const divs = document.querySelectorAll('#grid-container div');
divs.forEach(div => {
    div.style.width = `${100 / size}%`;
    div.style.height = `${100 / size}%`;    
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = getRandomColor();
            div.style.transition = 'background-color 0.2s ease';

        setTimeout(() => {
        div.style.backgroundColor = "";
        div.style.transition = 'background-color 0.5s ease';
    }, 5000);
    });
});