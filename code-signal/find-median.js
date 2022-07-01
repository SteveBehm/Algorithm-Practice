/*
Find the median value of an array of sorted integers
*/

function solution(a) {
  return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}
/*
Not explained well in the description

We are trying to find the median value essentially from the sorted array

if there are an even number of integers in the array
we want to return the value of a at the length / 2 minus 1
else
if the the number of integers is odd
we want to return the value of a at the length / 2 rounded down to the nearest value
*/
