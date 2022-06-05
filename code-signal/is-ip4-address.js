// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// solution(inputString) = false.

// There is no first number.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of digits, full stops and lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 30.

// [output] boolean

// true if inputString satisfies the IPv4 address naming rules, false otherwise.

// [JavaScript] Syntax Tips

// An identification number for devices connected to the internet. An IPv4 addresses written in dotted quad notation consists of four 8-bit integers separated by periods.

// In other words, it's a string of four numbers each between 0 and 255 inclusive, with a "." character in between each number. All numbers should be present without leading zeros.

// Examples:

// 192.168.0.1 is a valid IPv4 address
// 255.255.255.255 is a valid IPv4 address
// 280.100.92.101 is not a valid IPv4 address because 280 is too large to be an 8-bit integer (the largest 8-bit integer is 255)
// 255.100.81.160.172 is not a valid IPv4 address because it contains 5 integers instead of 4
// 1..0.1 is not a valid IPv4 address because it's not properly formatted
// 17.233.00.131 and 17.233.01.131 are not valid IPv4 addresses because they contain leading zeros

function solution(inputString) {
    const ipArr = inputString.split('.')
    let isIP = true;

    if(ipArr.length !== 4) return false;

    for (let i = 0; i < ipArr.length; i++) {
        const currentNum = parseInt(ipArr[i])

        if (ipArr[i] === '') return false

        if (/[a-z]/i.test(ipArr[i])) return false

        if (ipArr[i].length >= 2 && ipArr[i][0] === '0') {
            isIP = false
        }

        if (currentNum < 0 || currentNum > 255) {
            isIP = false
        }
    }
    return isIP
}

/*
first we can split the string at the "." and make an array of the string integers
then we can set the variable isIP to true

if the length of the array is not 4 return false

loop through the array of values one at a time till the end
create a variable to hold the integer version of the current value
if the current value is an empty string return false
if the current value has a letter in it return false
if the current values length is more at least 2 and the first character in the string is
0 that means we have a leading zero and we need to isIP is false
if the currentNum is less 0 or greater than 255 isIP is false

return isIP
*/
