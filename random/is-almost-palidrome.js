/*
input is a string: 'aba', 'abca', 'abcd'
output: boolean value stating if the string is almost a palindrome.
In order to be almost a palindrome, the string could only have one character removed
to become a palindrome string.
*/

function almostPalindrome(string) {
  const strArr = string.split('')

  if (strArr.reverse().join('') === string) {
    return true;
  }

  for (let i = 0; i < strArr.length; i++) {
    const arrCopy = [...strArr];
    arrCopy[i] = '';

    const copy =  arrCopy.join('')
    const reversedCopy = arrCopy.reverse().join('')

    if (copy === reversedCopy) {
      return true;
    }

  }

  return false
}

//PSEUDOCODE

/*
create a variable that will hold the string but in an array of its characters

if the reversed string of the input string is the same
return true

loop through the inputstring array
create a shallow copy of the input string array
set the current value to an empty string (this should get taken out when joining)
if the joined version of the input string array is equal to the reversed shallow copy string
return true

return false
*/
