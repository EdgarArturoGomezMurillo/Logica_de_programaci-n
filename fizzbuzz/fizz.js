// ejercicio para que escriba del 1 al 100 y fizz si es divicible por 3 coloca fizz si es divisible por 5 coloca buzz y de los dos fizzbuzz
var numeros = 100;
for (var i = 1; i <= 100; i++) {
    if (esDivisible(i, 3)) {
        document.write("fizz");
    }

    if (esDivisible(i, 5)) {
        document.write("buzz");
    }

    if (!esDivisible(i, 3) && !esDivisible(i, 5)) {
        document.write(i);
    }
    function esDivisible(num, divisor) {
        if (num % divisor == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    document.write("<br />");

}
