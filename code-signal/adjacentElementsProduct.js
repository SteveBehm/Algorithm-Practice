/*
Given an array of integers, find the pair of adjacent elements
that has the largest product and return that product.

For inputArray = [3, 6, -2, -5, 7, 3]
the output should besolution(inputArray) = 21.
7 and 3 produce the largest product.

PSEUDOCODE
Create variables that will hold the current and next element in the array.
Create the output variable and give it a value of negative infinity as some products may be negative values
Loop through the array of numbers beginning at the first index and stopping the loop at the index before the last
Assign values to the current and next element variables
If the current value multiplied by the next value is greater than the output variables
Make the output variables the product of the current and next values
Once the loop has been completed, return the output
*/
function solution(inputArray) {
  let a = 0;
  let b = 0;
  let c = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < inputArray.length - 1; i++) {
    a = inputArray[i];
    b = inputArray[i + 1];
    if (a * b > c) {
      c = a * b;
    }
  }
  return c;
}
