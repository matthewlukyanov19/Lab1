//part (a)
function countChars(inputString) {
    return inputString.length;
}

let result = countChars("test 1");
console.log(result);

//part (b)
function charNoSpaces(inputNoSpaces) {
    return inputNoSpaces.trim().length;
}

let result2 = charNoSpaces(" test 1 ");
console.log(result2);

//part (c)
function combinedFunct(value: string, spaces:boolean) {
    let count:number = 0;
    if(spaces){
        count = inputString.length;
    }else{
        count = inputNoSpaces.trim().length;
    }
    return count;
}
console.log(combinedFunct("test 1"),true);
console.log(combinedFunct("test 1");