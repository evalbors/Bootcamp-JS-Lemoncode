var square = (n, char) => { 
var draw = '';
    for(var i = 0; i <= n; i++){
        //console.log(line)
        for(var j = 0; j <= n; j++){
            draw += char;
            //console.log(draw)
       }
       draw += '\n';
    }
    return draw;
}

console.log(square(5, '*'));


// *
// *
// *
// *
// *

// *
// *
// *
// *
// *