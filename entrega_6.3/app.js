/* var square = (n, char) => {
  var draw = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      draw += char;
    }
    draw += "\n";
  }
  return draw;
};

console.log(square(5, "* "));

var drawLine = (n, char) => {
  var line = "";
  for (var i = 1; i <= n; i++) {
    line += char;
  }
  return (line += "\n");
};
var squareWithBorder = (n, charBorder, inner) => {
  var draw = "";
  const topLine = drawLine(n, charBorder);

  for (var i = 1; i <= n - 2; i++) {
    for (var j = 1; j <= n; j++) {
      var result = j === 1 || j === n ? charBorder : inner;
      draw += result;
    }
    draw += "\n";
  }

  const bottomLine = drawLine(n, charBorder);

  return topLine + draw + bottomLine;
};
console.log(squareWithBorder(6, "* ", "/ "));

var squareDiagonalLeftRight = (n, charDiagonal, charUp, charDown) => {
  var draw = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      var whichChar = i < j ? charUp : charDown;
      var result = i === j ? charDiagonal : whichChar;
      draw += result;
    }
    draw += "\n";
  }
  return draw;
};
console.log(squareDiagonalLeftRight(8, "🐠 ", "💦 ", "📌 "));

var squareDiagonalRightLeft = (n, charDiagonal, charUp, charDown) => {
  var draw = "";
  for (var i = 1; i <= n; i++) {
    for (var j = n; j >= 1; j--) {
      var whichChar = i < j ? charUp : charDown;
      var result = i === j ? charDiagonal : whichChar;
      draw += result;
    }
    draw += "\n";
  }
  return draw;
};
console.log(squareDiagonalRightLeft(8, "🐷 ", "👆🏽 ", "👇🏽 "));

var halfDiamond = (n, char) => {
  var draw = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if (i >= j) {
        draw += char;
      }
    }
    draw += "\n";
  }
  var drawNext = "";

  for (var k = 1; k <= n - 1; k++) {
    for (var l = n - 1; l >= 1; l--) {
      if (k <= l) {
        drawNext += char;
      }
    }
    drawNext += "\n";
  }

  return draw + drawNext;
};
console.log(halfDiamond(6, "♢ "));
 */

var pyramid = (n, char) => {
  var draw = "";
  var body = "";
  var vertex = "";
  var mid = Math.round(n / 2);

  for (var i = 1; i <= n; i++) {
    // console.log(i === mid)
    vertex = i === mid ? char : "";
    console.log(mid);
    for (var j = mid ; j <= mid; j++) {
      console.log(n, j);
      body = char += "\n";
    }
  }

  draw = vertex + body; 

  return draw;
};

console.log(pyramid(5, "💎 "));
