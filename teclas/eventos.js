var boton = document.getElementById("limpiar")
boton.addEventListener("click", limpiarCanvas);
document.addEventListener("keydown", dibujarTeclado); var limpiar = "borrar";
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;
//color con cuadrito rgb
var color_linea = document.getElementById("color1")
var color_linea = color_linea.value;
//codigos de las teclas
console.log(teclas);
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};
// dibujar con el teclado
dibujarlinea("blue", 149, 149, 151, 151, papel);
function dibujarTeclado(evento) {

    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarlinea(color_linea, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarlinea(color_linea, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.RIGHT:
            dibujarlinea(color_linea, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        case teclas.LEFT:
            dibujarlinea(color_linea, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
    }
}
function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//dibujar con mouse
var estado = 0

document.addEventListener("mousedown", presionar);
document.addEventListener("mouseup", soltar);
document.addEventListener("mousemove", dibujar);
function dibujar(evento) {
    if (estado == 1) {
        dibujarlinea(color_linea, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}

function presionar(evento) {
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}


function soltar(evento) {
    estado = 0;
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}
//boton para limpiar canva
function limpiarCanvas() {
    papel.clearRect(0, 0, cuadro.width, cuadro.height, color1);
    dibujarlinea("blue", 149, 149, 151, 151, papel);
}