/*
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
solution(s) = 3.

There are 3 different characters a, b and c.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string of lowercase English letters.

Guaranteed constraints:
3 ≤ s.length ≤ 1000.

[output] integer
*/

function solution(s) {
  let counter = 0;
  const prevVals = [];

  for (let i = 0; i < s.length; i++) {
    if (!prevVals.includes(s[i])) {
      counter++;
      prevVals.push(s[i]);
    }
  }

  return counter;
}

/*
first create a counter to store the number of unique characters
create an empty array that will store the previous characters that have been looked at
at that point in the loop
begin to loop through the string
if the current value is not present in the array of previous values
increment the counter
push the value into the prev vals array
when the loop has finished return the counter
*/
