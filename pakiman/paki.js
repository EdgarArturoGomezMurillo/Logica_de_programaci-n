var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new pakiman("cauchin", 100, 30));
coleccion.push(new pakiman("pokacho", 80, 50));
coleccion.push(new pakiman("tocinauro", 120, 40));
for (var p of coleccion) {
    p.mostrar();
}
for(var x in coleccion[0]){
    console.log(x);
}