var button = document.getElementById('button');
var container = document.getElementById('container')

container.style.display = "flex"

button.onclick = () => {
    const square = document.createElement('div');
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.backgroundColor = "red";

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
    })

   container.appendChild(square);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}