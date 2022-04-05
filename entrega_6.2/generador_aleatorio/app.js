// Vamos a construir un generador aleatorio que permita escoger, 
// de forma aleatoria, una cantidad determinada de números 
// de entre un mínimo y un máximo. Para entenderlo mejor, 
// os daremos la firma que debe tener la función:

var randomPick = (n, min, max) => {
    const range = max - min + 1;
    var randomList =[];
    for(var i = 0; randomList.length <= n; i++){
        var randomNumber = Math.floor(Math.random() * range);
        if(!isRepeated(randomList,randomNumber)){
            randomList.push(randomNumber)
        }      
    }
    return randomList;
}

var isRepeated = (arr, number) => {
    for(var i = 0; i <= arr.length; i++){
        if(number === arr[i]){
            return true;
        }
    }
    return false;
}

console.log(randomPick(10, 1, 10));


// De esta forma, para escoger 10 números aleatorios entre el 1 y el 100, usaremos la función anterior del siguiente modo:
// función q recorra el arr (parametro): en este arr existe este num esto dará un buleano
