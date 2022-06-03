// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer yourLeft

// A non-negative integer representing the heaviest weight you can lift with your left arm.

// Guaranteed constraints:
// 0 ≤ yourLeft ≤ 20.

// [input] integer yourRight

// A non-negative integer representing the heaviest weight you can lift with your right arm.

// Guaranteed constraints:
// 0 ≤ yourRight ≤ 20.

// [input] integer friendsLeft

// A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.

// Guaranteed constraints:
// 0 ≤ friendsLeft ≤ 20.

// [input] integer friendsRight

// A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.

// Guaranteed constraints:
// 0 ≤ friendsRight ≤ 20.

// [output] boolean

// true if you and your friend are equally strong, false otherwise.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    const myStrongest = yourLeft > yourRight ? yourLeft : yourRight
    const myWeakest = yourLeft < yourRight ? yourLeft : yourRight
    const friendStrongest = friendsLeft > friendsRight ? friendsLeft : friendsRight
    const friendWeakest = friendsLeft < friendsRight ? friendsLeft : friendsRight

    if (myStrongest === friendStrongest && myWeakest === friendWeakest) {
        return true
    } else {
        return false
    }
}

//PSEUDOCODE

/*
create a variable that will store yourStrongest value
use a ternary operator to determine if your left or right arm is stronger
create a variable that will store yourWeakest value
use a ternary operator to determine if your left or right is weakest

repeat the same process for your friend using two variables for their strongest and weakest

if your strongest is the same as your friends strongest and your weakest is the same
as your friends weakest
return true
otherwise return false
*/
