class pakiman {
    constructor(n, v, a) {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar() {
        alert(this.nombre);
    }
    mostrar() {
        this.imagen.style = "display: block;margin-left: auto;margin-right: auto;";
        document.body.appendChild(this.imagen);
        document.write("<p>" + "<center>");
        document.write("<b>" + this.nombre + "</b>" + "</br>");
        document.write("Vida: " + this.vida + "</br>");
        document.write("Ataque: " + this.ataque + "</br>" + "<hr/>");
        document.write("</p>" + "</center>");
    }
}