const divisorArreglo = require('./dividirArregloMayor');
const isAnagram = require('./anagrama');
const vocales = require('./contarVocales');
const factorial = require('./factorial');
const detectaPalindromo = require('./palindromo');
const threecompany = require('./TheThreeCompany');



describe("Pruebas del algoritmo factorial", () => { 

    const numFactorial = 4;
    test('Comprobar el factorial de 4 debe ser 24', () => {
        
        expect(factorial(numFactorial)).toBe(24)
    });

    test('Comprobar el factorial de 4 sea menor o igual que 25', () => {
       
        expect(factorial(numFactorial)).toBeLessThanOrEqual(25)
    });

    test('Comprobar el factorial de 4 sea mayor que 23', () => {
       
        expect(factorial(numFactorial)).toBeGreaterThan(23)
    });
});

describe("Pruebas de contador de vocales", () => {

    const palabra = 'Carlos'
    
    test('Comprobar que la palabra Carlos contenga 2 vocales', () => {

        expect(vocales(palabra)).toBe(2)
    });

    test('Comprobar que la palabra Carlos No contenga 3 consonantes', () => {

        expect(vocales(palabra)).not.toBe(3)
    });
   
});

describe("Pruebas de threeCompany", () => {

    const palabra = 'Casa';
    test('Comprobar que la palabra casa sea CCCaaasssaaa', () => {

        expect(threecompany(palabra)).toMatch('CCCaaasssaaa')
    });

    test('Comprobar que la palabra casa No sea cccaaasssaaa (c minuscula)', () => {

        expect(threecompany(palabra)).not.toMatch('cccaaasssaaa')
    });
});

describe("Pruebas del Palindromo", () => {

    const palabra = 'arribalabirra';
    const palabra2 = 'holatodos'
    test('Comprobar que la palabra arribalabirra sea Palindromo y devuelva true', () => {

        expect(detectaPalindromo(palabra)).toBeTruthy()
    });

    test('Comprobar que la palabra holatodos No sea Palindromo y devuelva false', () => {

        expect(detectaPalindromo(palabra2)).toBeFalsy()
    });
});

describe("Pruebas del Anagrama", () => {

    const palabra = 'amor';
    const palabra2 = 'roma'
    test('Comprobar que la palabras amor y roma sean anagramas y devuelva true', () => {

        expect(isAnagram(palabra,palabra2)).toBeTruthy()
    });

    test('Comprobar que la palabras amor y ropa No sean anagramas y devuelva false', () => {

        expect(isAnagram(palabra,'ropa')).toBeFalsy()
    });
});

describe("Pruebas de Division Arreglo y mayor", () => {

    const arreglo = "456888123789999666"
    
    test('Comprobar que se divide un arreglo y regresa el mayor (999) ', () => {

        expect(divisorArreglo(arreglo)).toBe("999");
    });

    test('Comprobar que se divide un arreglo y no regresa el mayor (666) ', () => {

        expect(divisorArreglo(arreglo)).not.toBe("666");
    });
});