let input = document.querySelector('#input');
let output = document.querySelector('#output');
let base = document.querySelector('#base');
let outputBinary;

function convert(){
    let word = input.value.split('');
    outputBinary = '';

    for(let i=0;i<word.length;i++){
        let charToAscii = word[i].charCodeAt(0);
        if(base.value == 'Binary') checkBase(2, charToAscii);
        else if(base.value == 'Decimal') checkBase(10, charToAscii);
        else if(base.value == 'Octal') checkBase(8, charToAscii);
        else checkBase(16, charToAscii);
    }
    output.value = outputBinary;
}

function checkBase(selectedBase, ascii){
    outputBinary += Number.parseInt(ascii).toString(selectedBase) + " ";
}