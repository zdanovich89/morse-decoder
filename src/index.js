const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arrOneZero = [];
  for (let i = 0; i < expr.length; i+= 10 ) {
    let sym = expr.slice(i, (i + 10));
    arrOneZero.push(sym);
  } 
  let arrMorse = [];
  for (let j = 0; j < arrOneZero.length; j++) {
   let stringLetter = ''; 
    for (let k = 0; k < arrOneZero[j].length; k+= 2) {
      
      if (arrOneZero[j][k] + arrOneZero[j][k+1] === '00' ) continue;
      if (arrOneZero[j][k] + arrOneZero[j][k+1] =='10') {
        stringLetter += '.';
      }
      if (arrOneZero[j][k] + arrOneZero[j][k+1] == '11') {
        stringLetter += '-';
      }
      if (arrOneZero[j][k] + arrOneZero[j][k+1] == '**') {
        stringLetter = ' ';
      } 
    }
    arrMorse.push(stringLetter); 
  } 
  let arrLetter = [];
  for (let m = 0; m < arrMorse.length; m++) {
    arrLetter.push(MORSE_TABLE[arrMorse[m]]);
  }
  let arrLetterSpace = [];
  for (let n = 0; n < arrLetter.length; n++) {
      if (arrLetter[n]) {
      arrLetterSpace.push(arrLetter[n])
    };
      if(arrLetter[n] == undefined)
      arrLetterSpace.push(' ');
    }

let strExit = arrLetterSpace.join('')
  return strExit;

  }
    


module.exports = {
    decode
}