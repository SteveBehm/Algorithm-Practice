// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 50.

// [output] string

// Return inputString, with all the characters that were in parentheses reversed.


//PSEUDOCODE
// Example input = "foo(bar(baz))blim"

/*
first we will create a variable that will hold the duplicate input str
then we need to find the first closing parenthesis and store it in a variable (indexOf)
then we need to find the closest opening parenthesis to that closing parenthesis (lastIndexOf)
now that we have those two we want to get the string between the parentheses and store it in a variable
make sure not to include the parenthesis in the string when slicing it from the string
put the string into an array with each charac its own element, reverse the arr, and then join it back into a string
now we should have the reversed str and we need to put it back into the original str
concatenate the original string by str = str.slice(0, startP) + reversedS + str.slice(endP + 1)
make sure not to include the last parenthesis in the string

right now we should have foo(barzab)blim and we need to go through the string again
we can do this by wrapping the above in a while loop that has a condition
while str.includes('(') code...
*/

function reverseInParentheses(inputString) {
  let str = inputString;

  while (str.includes('(')) {
    const endP = str.indexOf(')');
    const startP = str.lastIndexOf('(', endP);
    const strToRev = str.slice(startP + 1, endP)
    const reversedS = strToRev.split('').reverse().join('');
    str = str.slice(0, startP) + reversedS + str.slice(endP + 1);
  }

  return str;
}
