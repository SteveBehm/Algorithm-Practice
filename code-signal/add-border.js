// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
// 1 ≤ picture[i].length ≤ 100.

// [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

// PSEUDOCODE
// Example picture = ['abc', 'def']

/*
create an output array initialized to an empty array
create a variable that will hold the length of the strings in the array that now have a border
create two variable that will be the front and back borders, each's value will be an empty string

loop through the array
within the loop concatenate * on the front and back of the current string
push that new string into the output arr
the length of the new string should be the value of the strLength variable

create a loop that will put * into the front and back string variables
the loop will go from 0 to less than strLength

we should now have an output array that has string elements with border on them
push the backborder onto the output arr
unshift the front border onto the output arr

return the outputArr
*/

function addBorder(picture) {
  const output = [];
  let elementLength = 0;
  let topBorder = "";
  let bottomBorder = "";

  for (let i = 0; i < picture.length; i++) {
    picture[i] = `*${picture[i]}*`;
    elementLength = picture[i].length;
    output.push(picture[i]);
  }

  for (let i = 0; i < elementLength; i++) {
    topBorder += "*";
    bottomBorder += "*";
  }

  output.unshift(topBorder);
  output.push(bottomBorder);

  return output;
}
