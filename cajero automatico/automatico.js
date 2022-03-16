class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero() {
    var n = document.getElementById("dinero");
    dinero = parseInt(n.value);

    for (var bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            }
            else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero -= (bi.valor * papeles);
        }
    }

    if (dinero > 0) {
        resultado.innerHTML = "No tengo esa cantidad de dinero";
    }
    else {
        resultado.innerHTML = "";
        for (var e of entregado) {
            if (e.cantidad > 0){
                resultado.innerHTML += e.cantidad + " billletes de $" + e.valor + "<br/>";
            }
        }
    }
}

var caja = [];
var entregado = [];
caja.push(new Billete(50, 1));
caja.push(new Billete(20, 1));
caja.push(new Billete(10, 1));
caja.push(new Billete(5, 1));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
