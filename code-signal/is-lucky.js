// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.

//Pseudocode

/*
convert the string into a number
store the length of the string in a variable
figure out what is half of the length - this will be the first index of the
upper half of the number
create two arrays, one for upper and one for lower halves that are empty
loop through the string version of the number putting all characters into the lower array
that are at indexes below half the length
loop through the string version of the number putting all characters into the upper array
that are at indexes at half the length and above
parse these string values into numbers as they go into the arrays
use the reduce method to get the sum of each arrays
return the comparison between the two sums from the function
*/

function solution(n) {
    const string = n.toString();
    const length = string.length;
    const lowerArr = [];
    const upperArr = [];
    const initialVal = 0;

    for (let i = 0; i < string.length / 2; i ++) {
        lowerArr.push(parseInt(string[i]));
    }
    for (let i = length / 2; i < string.length; i++) {
        upperArr.push(parseInt(string[i]));
    }

    const upperSum = upperArr.reduce(
        (prev, current) => prev + current, initialVal
    )

    const lowerSum = lowerArr.reduce(
        (prev, current) => prev + current, initialVal
    )

    return upperSum === lowerSum
}
