// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// -231 <= x <= 231 - 1

// @param {number} x
// @return {boolean}


/*
    take the number x and store it as a string in a variable
    create an empty string and store it in a variable
    loop through the stored string backwards
    store each value in the reversed string
    return originalStr === reversedStr
*/
function isPalindrome(x) {
    const originalStr = x.toString();
    let reversedStr = '';

    for (let i = originalStr.length - 1; i >= 0; i--) {
        reversedStr += originalStr[i];
    }

    return originalStr === reversedStr;
};
