// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

// Check out the image below for better understanding:



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Non-empty array of positive integers.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 1000,
// 1 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The desired length.

function solution(inputArray) {
    for (let i = 1; ;i++) {
        if (inputArray.every(element => element % i !== 0)) {
            return i;
        }
    }
}
/*
loop through the array one at a time starting at 1

we wont need the conditional statement because we are going to break out of the function when the condition is met

if every element in the input array modulo i is not 0

then we know i is the first number that miss all the values in the array

if the remainder is 0 then we will increment i and check every element again
*/
