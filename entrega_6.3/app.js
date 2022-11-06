var square = (n, char) => {
  var draw = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      draw += char;
    }
    draw += '\n';
  }
  return draw;
};
console.log(square(5, '* '));

var drawLine = (n, char) => {
  var line = '';
  for (var i = 1; i <= n; i++) {
    line += char;
  }
  return (line += '\n');
};

var squareWithBorder = (n, charBorder, inner) => {
  var draw = '';
  const topLine = drawLine(n, charBorder);

  for (var i = 1; i <= n - 2; i++) {
    for (var j = 1; j <= n; j++) {
      var result = j === 1 || j === n ? charBorder : inner;
      draw += result;
    }
    draw += '\n';
  }

  const bottomLine = drawLine(n, charBorder);

  return topLine + draw + bottomLine;
};
console.log(squareWithBorder(6, '* ', '/ '));

var squareDiagonalLeftRight = (n, charDiagonal, charUp, charDown) => {
  var draw = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      var whichChar = i < j ? charUp : charDown;
      var result = i === j ? charDiagonal : whichChar;
      draw += result;
    }
    draw += '\n';
  }
  return draw;
};
console.log(squareDiagonalLeftRight(8, '🐠 ', '💦 ', '📌 '));

var squareDiagonalRightLeft = (n, charDiagonal, charUp, charDown) => {
  var draw = '';
  for (var i = 1; i <= n; i++) {
    for (var j = n; j >= 1; j--) {
      var whichChar = i < j ? charUp : charDown;
      var result = i === j ? charDiagonal : whichChar;
      draw += result;
    }
    draw += '\n';
  }
  return draw;
};
console.log(squareDiagonalRightLeft(8, '🐷 ', '👆🏽 ', '👇🏽 '));

var halfDiamond = (n, char) => {
  var draw = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if (i >= j) {
        draw += char;
      }
    }
    draw += '\n';
  }
  var drawNext = '';

  for (var k = 1; k <= n - 1; k++) {
    for (var l = n - 1; l >= 1; l--) {
      if (k <= l) {
        drawNext += char;
      }
    }
    drawNext += '\n';
  }

  return draw + drawNext;
};
console.log(halfDiamond(6, '♢ '));

var drawPyramide = (n, char) => {
  var draw = '';
  // External loop
  for (var i = 1; i <= n; i++) {
    // printing spaces
    for (var j = 1; j <= n - i; j++) {
      draw += '   ';
    }
    // printing star
    for (var k = 0; k < 2 * i - 1; k++) {
      draw += char;
    }
    draw += '\n';
  }
  return draw;
};
console.log(drawPyramide(4, ' * '));

var displayDiamont = (n, char) => {
  var draw = '';
  // Upside pyramid
  for (var i = 1; i <= n; i++) {
    // printing spaces
    for (var j = n; j > i; j--) {
      draw += ' ';
    }
    // printing star
    for (var k = 0; k < i * 2 - 1; k++) {
      draw += char;
    }
    draw += '\n';
  }
  // downside pyramid
  for (var i = 1; i <= n - 1; i++) {
    // printing spaces
    for (var j = 0; j < i; j++) {
      draw += ' ';
    }
    // printing star
    for (var k = (n - i) * 2 - 1; k > 0; k--) {
      draw += char;
    }
    draw += '\n';
  }
  return draw;
};
console.log(displayDiamont(4, '*'));
