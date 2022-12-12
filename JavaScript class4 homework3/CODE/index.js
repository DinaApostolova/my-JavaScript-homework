console.log ("CONNECTED")
function printBigString (firstWord, secondWord, thirdWord, fourthWord, fifthWord){
    return `My big string is ${firstWord} ${secondWord} ${thirdWord} ${fourthWord} ${fifthWord}`  
}
let printBigStringReturn = printBigString ("`Hello", "there", "students", "of", "SEDC!`")
console.log (printBigStringReturn)