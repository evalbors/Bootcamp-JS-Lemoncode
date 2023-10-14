var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var encritp = (text, alphabet1, alphabet2, targetId) => {
  let letterTranslate = '';
  console.log(text);
  for (var i = 0; i < text.length; i++) {
    let indexLetter = alphabet1.indexOf(text[i]);
    indexLetter != -1
      ? (letterTranslate += alphabet2[indexLetter])
      : (letterTranslate += text[i]);
  }
  document.getElementById(targetId).value = letterTranslate;
};

let myText = () => document.getElementById('original').value; // Función para que sea un valor dinámico

document
  .getElementById('encriptar')
  .addEventListener('click', () =>
    encritp(myText(), plainAlphabet, encryptedAlphabet, 'encriptado'),
  );

/* var desencritp = (text) => {
    let letterTranslate = '';
    for (var i = 0; i < text.length; i++){
        let indexLetter = encryptedAlphabet.indexOf(text[i]);
        if (indexLetter != -1){
            letterTranslate += plainAlphabet[indexLetter];
        }
        else {
            letterTranslate += text[i];
        }
        console.log(text[i]);
    }
    document.getElementById("original").value = letterTranslate;
}
 */

let myTextEncripted = () => document.getElementById('encriptado').value; // Función para que sea un valor dinámico
document
  .getElementById('desencriptar')
  .addEventListener('click', () =>
    encritp(myTextEncripted(), encryptedAlphabet, plainAlphabet, 'original'),
  );

/* console.log(encritp('hola'));
 */
