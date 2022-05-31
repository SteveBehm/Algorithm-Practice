function solution(inputArray) {
    const a = inputArray;
    let counter = 0;

    for (let i = 1; i < a.length; i++) {
        if (a[i] < a[i - 1]) {
            const diff1 = (a[i - 1] - a[i]) + 1;
            counter += diff1;
            a[i] += diff1;
        } else if (a[i] === a[i - 1]) {
            const diff1 = 1;
            counter += diff1;
            a[i] += diff1;
        }
    }

    return counter;
}

/*
we have an array of integers
we want them to be strictly increasing values
doesn't have to be by 1
don't move numbers
don't decrease numbers
return the number of moves to make that happen (counter)

create a variable that will act as a counter

loop through the inputArray
start at index 1
if the current index is less than the previous index
find the difference between the two and add 1
increase the counter by the difference + 1
add the difference + 1 to the current value in the loop

else if the current value is the same as the previous value
set the difference equal to 1
increase the counter by 1
increase the current value by 1

return the counter
*/
