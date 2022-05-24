// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

/*
  first create an object that holds key value pairs for the roman numerals
  this way each letter will have a value associated with it
  create a storage container for the total
  loop through the s string
  if the next int is truthy, indicating we arent at the end of the string yet
  we can go to the next if statement
    if the current integer is greater than the next integer
    add the current integer to the total
    else
    add the difference between the next integer and the current integer to the total
    before going to the next iteration we also need to increment i by 1 since we already accounted
    for the next roman numeral in the string in the else statement
  else
  we need to just add the current number (last roman numeral in the string) to the total
*/

function romanToInteger(s) {
  const romanVals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currentInt = romanVals[s[i]];
    let nextInt = romanVals[s[i + 1]];

    if (nextInt) {
      if(currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += (nextInt - currentInt);
        i++;
      }
    } else {
      total += currentInt;
    }
  }

  return total;
}
