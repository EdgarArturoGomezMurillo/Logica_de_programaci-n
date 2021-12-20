var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverconejo);

var xconejo = 30;
var yconejo = 150;
function moverconejo(evento) {
    var movimiento = 20;
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39

    }
    switch (evento.keyCode) {
        case teclas.UP:
            yconejo = yconejo - movimiento;
            dibujar();
            break;
        case teclas.DOWN:
            yconejo = yconejo + movimiento;
            dibujar();
            break;
        case teclas.RIGHT:
            xconejo = xconejo + movimiento;
            dibujar();
            break;
        case teclas.LEFT:
            xconejo = xconejo - movimiento;
            dibujar();
            break;

    }
}


var fondo = {
    url: "tile.png",
    cargaOK: false

};

var vaca = {
    url: "vaca.png",
    cargaOK: false

};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false

};
var pollo = {
    url: "pollo.png",
    cargaOK: false

};
var conejo = {
    url: "conejo.png",
    cargaOK: false
};
var cantidadconejo = 1;



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

conejo.imagen = new Image();
conejo.imagen.src = conejo.url;
conejo.imagen.addEventListener("load", cargarconejo);

//si al cargarlo es true va a dubujar

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaOK = true;
    dibujar();
}

function cargarconejo() {
    conejo.cargaOK = true;
    dibujar();
}
// dibuja los animales de manera aleatoria
function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        var cantidad = aleatorio(1, 8);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);

        }

    }

    if (cerdo.cargaOK) {
        var cantidad = aleatorio(1, 8);
        for (var c = 0; c < cantidad; c++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.imagen, x, y);

        }
    }

    if (pollo.cargaOK) {
        var cantidad = aleatorio(1, 5);
        for (var p = 0; p < cantidad; p++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.imagen, x, y);

        }
    }
    if (conejo.cargaOK) {
        papel.drawImage(conejo.imagen, xconejo, yconejo);
    }
}


// saca animales de manera aleatoria
function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
