const színek = ['gray', 'red', 'green', 'blue'];
let tábla = document.getElementById('tábla');


for (let i = 0; i < 16; i++) {
    let cella = document.createElement('div');
    cella.classList.add('cella');
    cella.dataset.colorIndex = 0;
    cella.addEventListener('click', changeColor);
    tábla.appendChild(cella);
}

function changeColor(event) {
    let cella = event.target;
    let currentColorIndex = parseInt(cella.dataset.colorIndex);
    let nextColorIndex = (currentColorIndex + 1) % színek.length;
    cella.style.backgroundColor = színek[nextColorIndex];
    cella.dataset.colorIndex = nextColorIndex;
}