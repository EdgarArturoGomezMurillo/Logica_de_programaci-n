var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoporclick);

var colorcito = document.getElementById("color");
var color2 = document.getElementById("color2");


var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujoporclick() {
    limpiarCanvas();

    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;
    colorcito = colorcito.value;
    color2 = color2.value;

    var l = 0;
    for (var i = 0; i < lineas; i++) {
        l = espacio * i;
        dibujarlinea(colorcito, 0, l, l, ancho);
        dibujarlinea(color2, l, 0, ancho, l);
        dibujarlinea(colorcito, l, ancho, ancho, ancho - l);
        dibujarlinea(color2, 0, ancho - l, l, 0);
    }
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function limpiarCanvas() {
    lienzo.clearRect(0, 0, d.width, d.height, colorcito, color2);
}