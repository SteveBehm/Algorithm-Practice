const inputString = 'steve';

function alphabeticShift(inputString) {
  let outputStr = '';

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'z') {
      outputStr += 'a';
      continue;
    }

    const current = inputString.charCodeAt(i); // ascii value
    const nextChar = String.fromCharCode(current + 1); // next letter in alphabet
    outputStr += nextChar;
  }

  return outputStr;
}
/*
given a string
change the string so that each character is changed to the next character in the alphabet
return the altered string
cat would be dbu

ascii table values
a begins at 97
z is 122

use charCodeAt() first argument is the index in the string returns ascii value
use fromCharCode() first argument ascii value, returns character

create a variable to hold the output string intialized to ''

loop through the string
if inputString[i] is 'z'
then outputStr += 'a'

string.charCodeAt(i) === ascii value of current character
variable for current ascii value
create variable for current ascii value + 1
const newChar = fromCharCode(ascii value + 1)
concatenate the character with the output string

return the output string
*/
