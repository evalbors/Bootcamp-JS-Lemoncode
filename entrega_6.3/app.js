var square = (n, char) => { 
    for(var i = 0; i < n; i++){
         var line =+ char;
         console.log(char)
         for(var j = 0; j < n; j++){
              console.log(line)
              square =+ line;
         }
    }
    return square;
}

console.log(square(5, '*'));

