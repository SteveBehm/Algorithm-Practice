/*
duplicate the array
filter out the duplicate so that it only has the non -1 numbers in it
sort the filtered array of numbers ascending (to sort you will have to do it a specific way)
  the sort method sorts things alphabetically by default
create a variable that will house the index for which we will be looking at from the numbers array
loop through the original array again
if the value is not -1
set the value of that index equal to the value of the numbers array at the current indexVal
increment the indexVal for the next iteration.
return the original array in its sorted form.
*/

function solution(a) {
    let numbers = a;
    let indexVal = 0;

    numbers = numbers.filter((element) => {
        if(element !== -1) {
            return element;
        }
    }).sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = numbers[indexVal];
            indexVal++;
        }
    }
    return a;
}
