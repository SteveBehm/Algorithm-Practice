/*
Given a sequence of integers as an array, determine whether it is possible
to obtain a strictly increasing sequence by removing no more than one
element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing
if a0 < a1 < ... < an. Sequence containing only one element is also
considered to be strictly increasing.
*/

// PseudoCode
/*
  Create a variable that holds the number of removed elements
  Loop through the array of integers stopping just before the last element in the array
  If the current element is larger or equal to the next element, increment the removed element count
  If the removed element count is greater than 1, return false
  Try removing the current element
    If the current index is not the first element in the array and the previous element's value is larger or equal
    to the next element's value in the array, set the next element's value to the current element's value
  If the loop finishes, then return true as that indicates a strictly increasing sequence is possible
*/

function solution(sequence) {
  const removedCount = 0;

  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      removedCount++;
    }

    if (removedCount > 1) return false;

    if (i > 0 && sequence[i - 1] >= sequence[i + 1]) {
      sequence[i + 1] = sequence[i];
    }
  }

  return true;
}
