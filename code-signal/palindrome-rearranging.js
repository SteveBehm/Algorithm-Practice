function solution(inputString) {
    const strArr = inputString.split('')
    const length = strArr.length
    let counter = 0
    let palindrome = true

    let occurrences = strArr.reduce(function(obj, item) {
        obj[item] = (obj[item] || 0) + 1
        return obj
    }, {});

    for (let prop in occurrences) {
        if (occurrences[prop] % 2 !== 0 && counter === 1) {
            palindrome = false
        }

        if (occurrences[prop] % 2 !== 0 && length % 2 !== 0) {
            counter++
        }

        if (length % 2 === 0 && occurrences[prop] % 2 !== 0) {
            palindrome = false
        }

    }

    return palindrome
}

/*
create a variable to store the array version of the string
store the length of the array in a variable
create a counter variable initialized to 0
create a palindrome variable that is initialized to true

creat an object using the reduce method to count the number of
occurrences of each character

loop through the object one key value pair at a time

if the value of the prop is odd and the counter === 1
palindrome will be set to false

if the value of the prop is odd and the length of the strArr is odd
increment the counter by 1

if the value of the prop is odd and the length is even
palindrome is set to false

return palindrome
*/
