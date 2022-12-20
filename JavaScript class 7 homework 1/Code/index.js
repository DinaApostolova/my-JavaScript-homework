console.log("CONNECTED")
let animal = {
    name:"Dog",
    kind:"Yorkshire Terrier",
    animalSpeak: function(){
        return this.name
    }

}
console.log(animal)
console.log(animal.animalSpeak(), "says:`Hey bro!!!`")