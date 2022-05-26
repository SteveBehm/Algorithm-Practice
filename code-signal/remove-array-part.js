/*
create variable to store our output array
loop through the input array

if i is less than L or greater than r
push the value at the current index into the output arr

return output arr
*/

function solution(inputArray, l, r) {
    const outputArr = []

    for (let i = 0; i < inputArray.length; i++) {
        if (i < l || i > r) {
            outputArr.push(inputArray[i]);
        }
    }
    return outputArr;
}
