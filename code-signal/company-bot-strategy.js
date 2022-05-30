/*
we are given an array of arrays
in the array within the array you have a time and correctness
find the average of all the correct answer times

create an variable to store the output number = 0
create a counter that we will divide the sum by at the end
loop through the array
if array[i][1] === 1
add array[i][0] to the outputNum
increment the counter

if counter === 0 then return 0

return outputnumber / by the number of correct answers (counter)
*/

function solution(trainingData) {
    let outputNum = 0;
    let counter = 0;

    for (let i = 0; i < trainingData.length; i++) {
        if(trainingData[i][1] === 1) {
            outputNum += trainingData[i][0];
            counter++
        }
    }

    if (counter === 0) return 0;

    return outputNum / counter;
}
