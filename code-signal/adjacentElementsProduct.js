/*
Given an array of integers, find the pair of adjacent elements
that has the largest product and return that product.

For inputArray = [3, 6, -2, -5, 7, 3]
the output should besolution(inputArray) = 21.
7 and 3 produce the largest product.
*/
function solution(inputArray) {
  let a = 0;
  let b = 0;
  let c = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < inputArray.length - 1; i++) {
    a = inputArray[i]
    b = inputArray[i + 1]
    if (a * b > c) {
      c = a * b;
    }
  }
  return c;
}
