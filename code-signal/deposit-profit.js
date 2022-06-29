/*
You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

Example

For deposit = 100, rate = 20, and threshold = 170, the output should be
solution(deposit, rate, threshold) = 3.

Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:

year 0: 100;
year 1: 120;
year 2: 144;
year 3: 172.8.
Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.
*/

function solution(deposit, rate, threshold) {
  let years = 0;
  let currentValue = deposit;
  const modifiedRate = rate / 100;

  while (currentValue < threshold) {
    currentValue = currentValue * modifiedRate + currentValue;
    years++;
  }

  return years;
}
/*
need to figure out how long it will take for your deposit
to pass the threshold
the deposit grows at the same rate every year
return how many years it will take to pass the threshold

create a variable that will act as a counter for the number of years

while current deposit is <= threshold
add additional funds based off rate and deposit to current deposit
increment the year counter

return the year counter
*/
