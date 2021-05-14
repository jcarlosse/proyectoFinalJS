function detectaPalindromo(palabra) {
    var nuevaPalabra = palabra.toLowerCase();

    if (nuevaPalabra == palabra.split('').reverse().join(''))
        return true;
    else
        return false
}

//console.log(detectaPalindromo("anitalavalatina"));

module.exports = detectaPalindromo;

