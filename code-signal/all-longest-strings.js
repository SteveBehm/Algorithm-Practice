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

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//   console.log("This prints to the console when you Run Tests");
//   return "Hello, " + name;
// }

function solution(inputArray) {
  let longestStr = '';
  const outputArr = [];

  // find the longest string first
  inputArray.map(string => {
    if (string.length > longestStr.length) {
      longestStr = string
    }
  })

  // put any strings in the input array with the same length as the longest string
  // into the output array
  inputArray.map(string => {
    if (longestStr.length === string.length) {
      outputArr.push(string);
    }
  })

  return outputArr;
}
