var z;

for (var i = 0; i < 10; i++) {
    z = aleatorio(10, 20);
    document.write(z + ", ");
}
//escribe un numero aleatorio entre 10 y 20
function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}