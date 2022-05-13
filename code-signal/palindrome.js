/*
[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
*/

function isPalindrome(string) {
  function solution(inputString) {
    let regularStrArr = inputString.split('');
    let reversedStrArr = inputString.split('').reverse();

    if (regularStrArr.join('') === reversedStrArr.join('')) {
      return true;
    } else {
      return false;
    }
  }
}
