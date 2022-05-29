// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105,
// 45 ≤ a[i] ≤ 100.

//PSEUDOCODE

/*
We need to divide the array of players represented by their weights into
two teams, every other player will be on the same team.
Then we need to return the weight of each team in an array

create an array with two elements [0, 0] that will eventually have the teams weights in it as our output

loop through the array of numbers
if the index is even that number will be added to the number at the first index of the output array
if the index is odd that number will be added to the number at the second index of the output array

once looping through the array is complete return the output array
*/

// Example: input = [50, 60, 60, 45, 70]

function solution(a) {
  let output = [0, 0];

  for (let i = 0; i < a.length; i++) {

    if(i % 2 === 0) {
      output[0] += a[i];
    } else {
      output[1] += a[i];
    }
  }

  return output;
}
