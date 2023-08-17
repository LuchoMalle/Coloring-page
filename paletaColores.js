let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
const paletaColores = document.getElementById('contenedorPaleta');
const divCanvas = document.getElementById('div-canvas');
canvas.width = divCanvas.offsetWidth;
canvas.height = divCanvas.offsetHeight;


let isDrawing = false;
let colores = ["red", "green", "blue", 'yellow', 'purple', 'lightblue', 'brown', 'black', 'gold', 'pink'];
let colorActual = "black";

let init = function () {
    canvas.width = divCanvas.clientWidth;
    canvas.height = divCanvas.clientHeight;
}

const generarColores = (listaColores) => {
    let boton;
    let svg;

    listaColores.forEach(element => {
        // boton = document.createElement("button");
        // boton.classList.add('colores');
        // boton.classList.add(element);
        // boton.value = element;
        // boton.name = element;
        // boton.onclick = cambiarColor;
        svg = document.createElement('i');
        svg.classList.add('fa-solid');
        svg.classList.add('fa-pencil');
        svg.classList.add(element);
        svg.style.color = element;
        svg.onclick = cambiarColor;
        paletaColores.appendChild(svg);
    });
}

const cambiarColor = (event) => {
    console.log(event);
    colorActual = event.target.classList[2];
}

const draw = (x, y, colorActual) => {
    if (isDrawing) {
        c.fillStyle = colorActual;
        c.beginPath();
        c.arc(x, y, 10, 0, Math.PI * 2);
        c.closePath();
        c.fill();
    }
}

canvas.addEventListener('mousemove', (event) =>
    draw(event.offsetX, event.offsetY, colorActual)
);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);

generarColores(colores);
