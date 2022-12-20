console.log("CONNECTED")
function myBook(title, author, readingStatus){
    this.title = "The Robots of dawn",
    this.author = "Isaac Asimov",
    this.readingStatus = true
    return myBook ()
    }

    function readingStatus(){
        let userReadingStatusInput = prompt("Do you read a book?");
        if (userReadingStatusInput === true)
        return "Already read `The Robots of dawn"
    } 

console.log(myBook)
console.log(readingStatus)