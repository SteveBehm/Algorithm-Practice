// Given array of integers, remove each kth element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 5 ≤ inputArray.length ≤ 15,
// -20 ≤ inputArray[i] ≤ 20.

// [input] integer k

// Guaranteed constraints:
// 1 ≤ k ≤ 10.

// [output] array.integer

// inputArray without elements k - 1, 2k - 1, 3k - 1 etc.

function solution(inputArray, k) {
  const outputArr = [];
  let counter = 0;

  for (let i = 0; i < inputArray.length; i++) {
    counter++;

    if (counter !== k) {
      outputArr.push(inputArray[i]);
    }

    if (counter === k) {
      counter = 0;
    }
  }

  return outputArr;
}

// PSEUDOCODE

/*
  Create an output array that will be initialized to an empty array
  create a variable to act as a counter
  loop through the input array
  increment the counter to indicate abnother iteration
  if counter is not the same as k
  then we can push the current value into the output array
  if the counter is k don't push the current value
  also set the counter back to 0
*/
