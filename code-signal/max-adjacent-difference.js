function solution(inputArray) {
    let difference = 0

    for (let i = 1; i < inputArray.length; i++) {
        let currentDiff = inputArray[i] - inputArray[i - 1]
        if (currentDiff < 0) {
            currentDiff *= -1;
        }
        if (currentDiff > difference) {
            difference = currentDiff
        }
    }

    return difference;
}
/*
create a variable to the hold the previous difference
loop through the array
start at index 1
current value at index - value at previous index
make that difference a positive number
if that difference is greater than the previous difference
previous difference = current difference

return difference
*/
