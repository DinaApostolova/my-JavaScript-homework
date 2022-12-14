console.log("CONNECTED")

let paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs)

let firstParagraph = paragraphs[0];
console.log(firstParagraph.innerText)
firstParagraph.innerText  = "I changed the text of the first paragraph with JavaScript!"

let secondParagraph = paragraphs[1];
console.log(secondParagraph.innerText)
secondParagraph.innerText="I changed the text of the second paragraph with JavaScript!"
secondParagraph.style.color="blue"

let myTitle=document.getElementById("myTitle");
console.log(myTitle.innerText)
myTitle.innerText="HELLO WORLD!"
myTitle.style.color="red"

let myDivs=document.getElementsByTagName("div");
console.log(myDivs)

let siblingParagraph=secondParagraph.nextElementSibling
console.log(siblingParagraph.innerText)
siblingParagraph.innerText="It is really easy!!"
siblingParagraph.style.color="orange"

let secondDiv=myDivs[2]
console.log(secondDiv.innerText)
secondDiv.innerText="The last one was the hardest one!\n Have a nice day!"
secondDiv.style.color="purple"


