/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// Pseudocode
/*
we need to use a stack in order to solve this problem
first create a hashmap that has all the types of brackets and their pairs
create a stack which is an empty array literal
if the length of the string s is odd return false
if the string is empty return true
loop through the string one character at a time
store the current value of the index in a variable
if the value of the hashmap at s[i] is true then we know it is an opening bracket and
we want to push the closing bracket from the hashmap into the stack
if the current value is a closing bracket we need to check if the stack has
the corresponding opening bracket at the end of the stack
*/

function isValid(string) {
  const hashMap = {'{': '}', '[': ']', '(': ')'};
  const stack = [];

  if (stack.length % 2 !== 0) return false;
  if (stack === '') return true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    // if the value of the current character is truthy then we know the current
    // char is an opening bracket
    // we want to push the opening brackets closing pair onto the stack
    if (hashMap[char]) {
      stack.push(hashMap[char]);
    } else if (stack.length > 0 && stack[stack.length - 1] === char) {
      // this means we have a closing bracket
      // if the stack has at least one character in it and the top character in the stack
      // is the same as our current character
      // pop the char off the stack because our current char is a closing bracket for a previous char
      stack.pop();
    } else {
      // this means the current char is a closing bracket and there are char in the stack to possibly
      // be the matching opening bracket
      // return false
      return false;
    }
  }

  // if we have a string with a valid order of brackets then the stack should be empty
  return stack.length === 0;
};
