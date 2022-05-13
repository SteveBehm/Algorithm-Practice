/*
[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.
*/

/*
divide the given number by 100
then round that number up to the nearest integer
display that integer
*/

function century(year) {
  return Math.ceil(year/100);
}
