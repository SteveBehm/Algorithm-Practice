/*
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
solution(name) = true;
For name = "qq-q", the output should be
solution(name) = false;
For name = "2w2", the output should be
solution(name) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string name

Guaranteed constraints:
1 ≤ name.length ≤ 10.

[output] boolean

true if name is a correct variable name, false otherwise.
*/

function solution(name) {
    let output = true

    if (/^\d+$/.test(name[0])) {
        return false;
    }

    for (let i = 0; i < name.length; i++) {
        if (!/[a-z]/i.test(name[i]) && !/^\d+$/.test(name[i]) && name[i] !== '_') {
            output = false
        }

    }

    return output
}
/*
input is a string
output boolean value
should only be made up of letters, digits, and underscores
cant start with a digit

create a variable that holds a boolean value acting as our output
initialize to true

if name[0] is a number return false

loop through the name string
if the current value is not letter, number or digit return false

*/
