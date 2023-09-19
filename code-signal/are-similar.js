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

// PSEUDOCODE

/*
   In general I want to create a solution that counts the number of differences as I loop through the arrays
   If there are more than two differences, then we won't be able to adjust an array by swapping one pair of elements

   First, check to see if a === b as an edge case and return true if so
   Create a variable that will act as a counter and initialize it to 0
   Create another variable that will hold the indexes of the differing values
   Loop through array a beginning at the first element
   If the element in the first array at index i is not equal to the element at index i in the other array
   Increment the counter
   Add the index to the array holding the differing indexes
   If the count > 2 return false
   After the loop completes, we need to check if swapping the indexes make the arrays equal
*/

function solution(a, b) {
  if (a === b) return true;

  const count = 0;
  const diffIndexes = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
      diffIndexes.push(i);
    }

    if (count >= 2) return false;
  }

  const [index1, index2] = diffIndexes;
  return a[index1] === b[index2] && a[index2] === b[index1];
}
