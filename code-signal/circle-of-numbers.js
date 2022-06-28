/*
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be
solution(n, firstNumber) = 7.
*/

function solution(n, firstNumber) {
  const halfN = n / 2;
  let output = 0;

  if (firstNumber === halfN) {
    return output;
  }

  if (firstNumber + halfN <= n - 1) {
    output = firstNumber + halfN;
  } else {
    output = firstNumber - halfN;
  }

  return output;
}
/*
find the number that is written in the radially opposite position of the firstnumber given total number of numbers including 0

The difference between the first number and it opposite will be
n / 2.

if the first number is half of n then the opposite number will be 0

if the first number + half of n is <= n - 1
then the first number + half of n is the opposite

else do first number - half of n, which is the opposite
*/
