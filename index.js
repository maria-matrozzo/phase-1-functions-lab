// Code your solution in this file!
let num1 = 42
function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return (pickup - num1);
    } else if (pickup < 42) {
        return (num1 - pickup);
    }
}

let feet = 264
function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * feet
    }

    function distanceTravelledInFeet (headquarters, num2){
        if (num2 > headquarters){
            return (num2 - headquarters)*feet;
    
        }else{
        return (headquarters - num2)*feet;
        }
    }

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0
    } else if (distance < 2001) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}
calculatesFarePrice(34,32) 
calculatesFarePrice(50,58)
calculatesFarePrice(34,24)