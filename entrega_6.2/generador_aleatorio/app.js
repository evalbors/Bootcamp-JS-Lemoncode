var randomPick = (n, min, max) => {
    const range = max - min + 1;
    var randomList = [];
    while (randomList.length != n) {
      var randomNumber = Math.floor(Math.random() * range);
      if (!isRepeated(randomList, randomNumber)) {
        randomList.push(randomNumber);
      }
    }
    return randomList;
};

var isRepeated = (arr, number) => {
    for(var i = 0; i <= arr.length; i++){
        if(number === arr[i]){
            return true;
        }
    }
    return false;
}

console.log(randomPick(10, 1, 100));


// De esta forma, para escoger 10 números aleatorios entre el 1 y el 100, usaremos la función anterior del siguiente modo:
// función q recorra el arr (parametro): en este arr existe este num esto dará un buleano
