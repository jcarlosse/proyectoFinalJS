function vocales(cadena) {
    var n = cadena.length;
    var countVocal = 0;
    var countConst = 0;

    for (var i = 0; i < n; i++) {
        var x = cadena.charAt(i).toLowerCase();

        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            countVocal++;
        
    }
    return countVocal;
};

//console.log('Numero de vocales ' + vocales('Carlos'));

module.exports =vocales;

