// Vamos a construir un generador aleatorio que permita escoger, 
// de forma aleatoria, una cantidad determinada de números 
// de entre un mínimo y un máximo. Para entenderlo mejor, 
// os daremos la firma que debe tener la función:

var randomPick = (n, min, max) => {
    const range = max - min + 1;
    for(let i = 0; i < n; i++){
        randomPick += Math.floor(Math.random() * range);
        /* console.log(randomPick) */
    }
    return randomPick;
}

// De esta forma, para escoger 10 números aleatorios entre el 1 y el 100, usaremos la función anterior del siguiente modo:
console.log(randomPick(10, 1, 100));

