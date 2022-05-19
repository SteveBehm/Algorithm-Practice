/*
We will have two inputs, which are lowercase string
We need to determine how many of the characters the strings share
a pair of matching characters cannot be matched with any other characters

first create a counter variable for the number of pairs present between the two strings
create a variable for each of the strings converted to arrays
loop through the first arr of characters
if the value of the strArr[i] is included in the second strArr
then we want to increment the counter
find the index at which this matching character lives in the second strArr
and remove that character from the strArr we are comparing characters from the frst strArr against.

return the counter at the end
*/

function solution(s1, s2) {
    let counter = 0;
    let s1Arr = s1.split('')
    let s2Arr = s2.split('');

    for (let i = 0; i < s1Arr.length; i++) {

      if (s2Arr.includes(s1Arr[i])) {
          counter += 1;
          let matchIndex = s2Arr.indexOf(s1Arr[i])
          s2Arr.splice(matchIndex, 1)
      }

    }

    return counter;
}
