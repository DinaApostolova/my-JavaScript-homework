console.log ("CONNECTED")
function tellStory (name, mood, activity){
    return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day.`  
}
let printTellStory = tellStory ("John", "enthusiastic", "climbing")

console.log (printTellStory)

let printTellStory2 = tellStory ("Dina", "happy", "playing")
console.log (printTellStory2)