let fridayCash=prompt("Friday Cash");

if(fridayCash >= 50){
    console.log("You should go out to a dinner and a movie.")
} else if(fridayCash >= 35 && fridayCash < 50){
    console.log("You should go out to a fine meal.")
} else if(fridayCash >= 12 && fridayCash < 35){
    console.log("You should go see a movie." )
} else {
    console.log("Looks like you'll be watching TV.")
}

