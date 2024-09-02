function desglosarString(texto, tipo) {
    // Convierte el texto a minúsculas para hacer la comparación insensible a mayúsculas
    texto = texto.toLowerCase();

    // Define las vocales y consonantes
    const vocales = 'aeiou';
    const consonantes = 'bcdfghjklmnpqrstvwxyz';

    // Inicializa contadores
    let contadorVocales = 0;
    let contadorConsonantes = 0;

    // Recorre cada carácter del texto
    for (let char of texto) {
        if (vocales.includes(char)) {
            contadorVocales++;
        } else if (consonantes.includes(char)) {
            contadorConsonantes++;
        }
    }

    // Retorna el resultado basado en el tipo solicitado
    if (tipo === 'vocales') {
        return contadorVocales;
    } else if (tipo === 'consonantes') {
        return contadorConsonantes;
    } else {
        throw new Error('Tipo debe ser "vocales" o "consonantes"');
    }
}

// Ejemplos de uso
console.log(desglosarString("murcielagos", "vocales")); //  4
console.log(desglosarString("murcielagos", "consonantes")); //  6

function twoSum(nums, target) {
    // Crea un objeto para almacenar los números y sus índices
    const numIndices = new Map();

    // Recorre la lista de números
    for (let i = 0; i < nums.length; i++) {
        // Calcula el complemento que necesitamos para alcanzar el target
        const complement = target - nums[i];

        // Verifica si el complemento ya está en el objeto
        if (numIndices.has(complement)) {
            // Si está, retornar los índices del complemento y del número actual
            return [numIndices.get(complement), i];
        }

        // Si el complemento no está, guardar el número actual y su índice en el objeto
        numIndices.set(nums[i], i);
    }

    // Si no se encuentran dos números que sumen el target, retornar un arreglo vacío
    return [];
}

// Ejemplos de uso
console.log(twoSum([2,7,11,15], 9)); //  [0, 1]
console.log(twoSum([3,4,2], 6));      //  [1, 2]

function conversionRomana(romano) {
    // Define los valores de los números romanos
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Inicializa el total en 0
    let total = 0;

    // Recorre la cadena de números romanos
    for (let i = 0; i < romano.length; i++) {
        // Obtiene el valor del número romano actual y del siguiente
        const valorActual = valores[romano[i]];
        const valorSiguiente = i + 1 < romano.length ? valores[romano[i + 1]] : 0;

        // Si el valor actual es menor que el valor del siguiente, se resta
        if (valorActual < valorSiguiente) {
            total -= valorActual;
        } else {
            // Si no, se suma
            total += valorActual;
        }
    }

    return total;
}

// Ejemplos de uso
console.log(conversionRomana("III"));   //  3
console.log(conversionRomana("XIV"));    // 14
console.log(conversionRomana("MMXXIV"));    // 2024
console.log(conversionRomana("MXMVII")); //  1997

