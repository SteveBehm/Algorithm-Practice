/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.



For cell1 = "A1" and cell2 = "H3", the output should be
solution(cell1, cell2) = false.



Input/Output

[execution time limit] 4 seconds (js)

[input] string cell1

Guaranteed constraints:
cell1.length = 2,
'A' ≤ cell1[0] ≤ 'H',
1 ≤ cell1[1] ≤ 8.

[input] string cell2

Guaranteed constraints:
cell2.length = 2,
'A' ≤ cell2[0] ≤ 'H',
1 ≤ cell2[1] ≤ 8.

[output] boolean

true if both cells have the same color, false otherwise.
*/

function solution(cell1, cell2) {
  let board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  let total1 = board[cell1[0]] + parseInt(cell1[1]);
  console.log(total1);
  let total2 = board[cell2[0]] + parseInt(cell2[1]);
  console.log(total2);

  return total1 % 2 === total2 % 2;
}

//PSEUDOCODE

/*
  first give values to all of the letters on the chess board
  we can combine the two values to use the modulo operator

  make sure to turn the second character in the input string into an integer

  create two totals, one with the added values from cell1 and the other from
  cell2

  if total1 % 2 === total2 % 2 then they will be the same color
  **they could both be even or they could both be odd, as long as they are the same**
  otherwise they wont be the same color
*/
