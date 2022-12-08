console.log("Dog's Age")
function calculateDogAge(humanAge){
    let dogAge = humanAge * 7;
    console.log("Dog's Age is:", dogAge)
}
calculateDogAge(5)
calculateDogAge(8)
calculateDogAge(10)
calculateDogAge(3)


console.log("Human Age")
function calculateHumanAge(dogAge){
    let humanAge = dogAge / 7;
    console.log("Human Age is:", humanAge)
}
calculateHumanAge(28)
calculateHumanAge(56)
calculateHumanAge(14)
calculateHumanAge(21)
calculateHumanAge(42)