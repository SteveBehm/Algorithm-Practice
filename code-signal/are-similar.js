// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// solution(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// solution(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// solution(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Array of integers.

// Guaranteed constraints:
// 3 ≤ a.length ≤ 105,
// 1 ≤ a[i] ≤ 1000.

// [input] array.integer b

// Array of integers of the same length as a.

// Guaranteed constraints:
// b.length = a.length,
// 1 ≤ b[i] ≤ 1000.

// [output] boolean

// true if a and b are similar, false otherwise.

function solution(a, b) {
    let c = [];
    let d = [];

    if (a.toString() === b.toString()) return true;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            c.push(a[i]) // [1, 2]
            d.push(b[i]) // [2, 1]
        }
    }
    c = c.reverse();

    if (d.length === 2 && c.toString() === d.toString()) {
        return true;
    } else {
        return false;
    }
}

/*
We are given two arrays and we need to see if we can make them identical
In order to make them identical all we can do is swap one pair of elements in the same array
we will need to check if either array can be switched to match the other

create a variable that is an empty array to push a[i] values into
create a variable that is an empty arrau to push b[i] values into

we can use a guard to catch any arrays that are already the same
we need to compare the string versions of arrays in order to get an accurate comparison

loop through one of the arrays one character at a time until the end
we will essentially be looping through both arrays at the same time

if a[i] !=== b[i]
we will push a[i] into its own array and b[i] into its own array
if it is possible to just swap character in one array or the other
then both of the array should have a length of 2 once the loop has completed

now we need to reverse one of the arrays that we pushed values into

if the reversed array has a length of 2 and the string versions of the two arrays we pushed values into are equal we can return true
otherwise we need to return false
*/
