/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

For Example

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

solution(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]

Input/Output

[execution time limit] 4 seconds (js)

[input] array of arrays of boolean values

A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 100,
2 ≤ matrix[0].length ≤ 100.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.
*/

function minesweeper(matrix) {
  let outputMatrix = [];

  for (let a = 0; a < matrix.length; a++) {
    outputMatrix.push([]);

    for (let b = 0; b < matrix[a].length; b++) {
      const top = a - 1 !== -1;
      const right = b + 1 < matrix[a].length;
      const bottom = a + 1 < matrix.length;
      const left = b - 1 !== -1;
      let counter = 0;

      if (top && matrix[a - 1][b]) {counter++}
      if (top && right && matrix[a - 1][b + 1]) {counter++}
      if (right && matrix[a][b + 1]) {counter++}
      if (bottom && right && matrix[a + 1][b + 1]) {counter++}
      if (bottom && matrix[a + 1][b]) {counter++}
      if (bottom && left && matrix[a + 1][b - 1]) {counter++}
      if (left && matrix[a][b - 1]) {counter++}
      if (top && left && matrix[a - 1][b - 1]) {counter++}

      outputMatrix[a][b] = counter
    }
  }

  return outputMatrix;
}

// PSEUDOCODE
/*
create an empty array matrix that will store our output
loop through the outer array (matrix)
we want to first push an empty array each time we go to the next array in the loop
into the output array so that we create arrays within the output array

loop through the inner matrices
we then need to know if there are values below, above, right, and left compared to the
current value we are on. We can store these in variables.

  - top = a - 1 !== -1 (if true then there is a top array)
  - right = b + 1 < matrix[0].length (if true there is a value to the right)
  - bottom = a + 1 < matrix.length (if true there is an array below the current array)
  - left = b - 1 !== -1 (if true, then there is a value to the left)

We will also create a counter that will be incremented if the current value borders a mine
this counter will be one of the values within the array within the outer output array

We will now have multiple if statements to cover conditions
 - if there is a top value and that value is true --> increment the counter
 - if there is a top value and a right value, and the value above and to the right is true
   increment the counter
 - if there is a right value and that value is true --> increment the counter
 - if there is a bottom value and a right value, and the value to the below and to the right is true
   increment the counter
 - if there is a bottom value and that value is true --> increment the counter
 - if there is a bottom value and a left value, and the value below and to the left is true
   increment the counter
 - if there is a value to the left and it is true --> increment the counter
 - if there is a value to the top and to the left, and the value above and to the left is true
   increment the counter

Before exiting the loop, set the outputMatrix[a][b] to the current counter value

outside of both loops return the outputMatrix
*/
