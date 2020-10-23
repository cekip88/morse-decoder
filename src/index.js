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
    let words = [];
    for (let i = 0; i < expr.length; i += 10){
        let word = expr.substr(i,10);
        let symbol = '';
        for (let j = 0; j < word.length; j += 2){
            if(word[j] !== '0'){
                 symbol += word[j] + word[j + 1]
            }
        }
        words.push(symbol);
    }

    let encodeWords = [];
    words.forEach(function (el) {
        let symbol = '';
        for (let i = 0; i < el.length; i += 2){
            if(el[i] + el[i + 1] === '10') symbol += '.';
            else if(el[i] + el[i + 1] === '11') symbol += '-';
            else {
                symbol = ' ';
                break;
            }
        }
        encodeWords.push(symbol);
    });

    let resultStr = '';
    encodeWords.forEach(function (el) {
        if(el !== ' ') resultStr += MORSE_TABLE[`${el}`];
        else resultStr += ' ';
    });

    return resultStr;
}

module.exports = {
    decode
};