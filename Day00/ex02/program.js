function threeLargestNumbers(array){
    const threeLargestNumbers = [array[0], array[1], array[2]];

    for (let i = 3; i < array.length; i++) {
        let keyLowest = 0;
        for (let j = 1; j < threeLargestNumbers.length; j++) {
            if(threeLargestNumbers[j] < threeLargestNumbers[keyLowest]){
                keyLowest = j; 
            }
        }

        if(threeLargestNumbers[keyLowest] < array[i]){
            threeLargestNumbers[keyLowest] = array[i]; 
        }
        
    }
    return threeLargestNumbers.sort((a, b) => a - b);    
} 
exports.threeLargestNumbers =  threeLargestNumbers;