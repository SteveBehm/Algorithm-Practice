/*
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
*/

function solution(inputArray, elemToReplace, substitutionElem) {
    let outputArr = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            outputArr.push(substitutionElem);
        } else {
            outputArr.push(inputArray[i])
        }
    }

    return outputArr;
}
