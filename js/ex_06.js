var button = document.getElementById('button');
var container = document.getElementById('container')

container.style.display = "flex"

button.addEventListener('click', () => {
    const square = document.createElement('div');
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.backgroundColor = "red";
   container.appendChild(square);
})
