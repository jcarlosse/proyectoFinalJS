function threecompany(cadena) {
    var n = cadena.length;
    var output = '';

    for (var i = 0; i < n; i++) {
        var letra = cadena.charAt(i);
        output = output + letra + letra + letra
    }
    return output;
};

module.exports = threecompany;