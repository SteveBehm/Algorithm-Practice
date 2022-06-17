// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// solution(n) = true;
// For n = 642386, the output should be
// solution(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 109.

// [output] boolean

// true if all digits of n are even, false otherwise.

function solution(n) {
    const nStr = n.toString();
    let isEven = true;

    for (let i = 0; i < nStr.length; i++) {
        if (parseInt(nStr[i]) % 2 !== 0) {
            isEven = false;
        }
    }

    return isEven

}
