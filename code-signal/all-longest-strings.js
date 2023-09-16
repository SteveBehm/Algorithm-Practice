// Given an array of strings, return another array containing all of its longest strings.

//   Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] array.string inputArray

// A non - empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
//   1 ≤ inputArray[i].length ≤ 10.

//   [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

/* PSEUDOCODE
  First we need to determine the length of the longest string
  Create a variable that holds the length of the longest string
  Create a variable that will hold the output array

  Loop through the array
  If the element has a length greater than the current longest length store the length of the array

  Loop through the array again
  If the element has a length equal to the longest element, put that element into the output array

  return the output array
*/
function solution(inputArray) {
  let longestLength = 0;
  const outputArr = [];

  // find the longest string first
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) {
      longestLength = inputArray[i].length;
    }
  }

  // Put any strings in the input array with the same length as the longest string into the output array
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longestLength) {
      outputArr.push(inputArray[i]);
    }
  }

  return outputArr;
}

// Here is an alternative solution that uses the reduce and filter methods
function solution2(inputArray) {
  const longestLength = inputArray.reduce(
    (maxLen, str) => Math.max(maxLen, str.length),
    0
  );

  const outputArr = inputArray.filter((str) => str.length === longestLength);

  return outputArr;
}
