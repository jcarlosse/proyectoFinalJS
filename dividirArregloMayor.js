//Dividir un arreglo en 3 e imprimir valor
function divisorArreglo(arregloEntero) {

    var arreglo2 = [];
    var largoArreglo = arregloEntero.length;
    var mayor = 0;

    for (var i = 0; i < largoArreglo; i += 3) {

        var division = arregloEntero.slice(i, i + 3);
        arreglo2.push(division);
        //console.log("Division:" + division);
        if (division > mayor) {
            mayor = division;
        }
    }
       return mayor;
}

module.exports = divisorArreglo;

