/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string

Example:
Input: strs = ['flower', 'flow', 'flight]
Output: 'fl'

create an output variable that will story the final string
it will initally be just an empty string
if strs === null or strss.length === 0 return empty string
loop through the first string in the strs array
store the current character in the first string in a variable
loop through the strings within the strs array starting at the second value
if firstString[i] === strs[j][i]
then outputStr += firstString[i]
else if the first character in the first string does not equal the current character in the current string
return the prefix, which will show the common prefix amongst all strings

if the prefix hasn't already been returned from the function by the end of the array
return the prefix (all words will be the same essentially)


*/

function longestCommonPrefix(strs) {
  // make sure to return an empty string if the array is empty
  if (strs.length === 0) return '';
  // assign the first element in the array to the prefix variable
  const prefix = strs[0]

  // loop through the strs array beginning with the second element
  for (let i = 1; i < strs.length; i++) {
    // while the prefix is not at the first index in the current wordd
    // we want to remove a letter from the prefix
    while(strs[i].indexOf(prefix !== 0)) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}

// this has a time complexity of On^2
// function longestCommonPrefix(strs) {
//   // Check to see if the strs array s empty or falsy and return an empty string if it is
//   if (strs.length === 0 || !strs) return '';
//   // Initially assign 0 to the variable i
//   let i = 0;
//   // while every word's current charac in the the given array is strictly eqaul to the current character in the first word
//   // increment i
//   while (strs.every(w => w[i] === strs[0][i])) {
//     i++;
//   }
//   // return the subsrtring from the first word in the array that goes until i
//   return strs[0].substr(0, i);

// }

// The time complexity for this is On^2 and didn't pass in leetcode
// var longestCommonPrefix = function(strs) {
//     const outputStr = '';

//     for (let i = 0; i < strs[0].length; i++) {
//         const currentOfFirst = strs[0][i];
//         for (let j = 1; j < strs.length; j++) {
//             if (currentOfFirst === strs[j][i]) {
//                 outputStr += currentOfFirst
//             } else {
//                 return outputStr;
//             }
//         }
//     }
//  return outputStr;
// }
