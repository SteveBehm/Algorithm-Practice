/*
Ratiorg got statues of different sizes as a present from CodeMaster
for his birthday, each statue having an non-negative integer size.
Since he likes to make things perfect, he wants to arrange them from
smallest to largest so that each statue will be bigger than the
previous one exactly by 1. He may need some additional statues to be
able to accomplish that. Help him figure out the minimum number of
additional statues needed.
*/
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7 to increment by 1 in his statue collection.

function solution(statues) {
  const compareArr = [];
  function compareNumbers(a, b) {
    return a - b;
  }
  statues.sort(compareNumbers);
  for (let i = statues[0]; i <= statues[statues.length - 1]; i++) {
    compareArr.push(i);
  }
  return compareArr.length - statues.length;
}
