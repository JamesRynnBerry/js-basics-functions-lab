// Code your solution in this file!
const headquarters = 42

function distanceFromHqInBlocks(distance){
   if (distance < 42){
return headquarters - distance
}
   else return distance - headquarters
}

const feet = 264

function distanceFromHqInFeet(distance){
   if (distance < 42) {
       return (headquarters - distance)*feet
}
    else return (distance - headquarters)*feet
}

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return (destination - start)*feet
    }
    else if (destination < start){
        return (start - destination)*feet
    }
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
    }
    if (distanceTravelledInFeet(start, destination) < 2000){
        return ((start, destination -400)*feet) *.02
    }
    if(distanceTravelledInFeet(destination, start) > 2000 &&
      distanceTravelledInFeet(destination, start) < 2500){
        return 25;
      }
    if(distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far"
    }
}
