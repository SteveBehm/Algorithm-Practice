/*
Find the median of two sorted array's of integers

arr1 = [1, 3, 6]
arr2 = [2, 4, 6]

median(arr1, arr2) = 3.5

[1,2,3,4,5,6,6]
*/

//Pseudo-code

/*
  first we need to concatenate the two arrays (concat)
  new array will be [1,3,6,2,4,6]
  then we need to sort the array with the numeric sort method
  array.sort(function(a,b) {return a - b});
  find the length of the array and store in a variable
  Is the length of the array even or odd
  if the array length is odd
  divide the length by 2 and round down to the nearest integer (arrays have index 0) (can also subtract .5)
  this will be the index of the median value, return it
  if the array length is even
  divide the length by 2
  the lower bound will be the length / 2 - 1
  the upper bound will be the length / 2 (because the array has a 0 index)
  add the two values togeher and divide by 2 to get the median, return it form the function
*/

function median(arr1, arr2) {
  const combined = arr1.concat(arr2);
  combined.sort(function(a,b) {return a - b});

  const length = combined.length;

  if (length % 2 !== 0) {
    // this means there are an odd number of values

    return combined[(length / 2) - .5]

  } else {
    // find the upper and lower index and
    let upper = combined[(length / 2)];
    let lower = combined[(length / 2) - 1];

    return (upper + lower) / 2;

  }
}

console.log(median([1, 3, 6], [2, 4, 6]));
