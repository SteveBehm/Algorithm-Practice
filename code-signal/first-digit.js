function solution(inputString) {
  console.log(typeof 1);

  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(inputString[i]) && inputString[i] !== " ") {
      return inputString[i];
    }
  }
}
/*
loop through the string
if the current value is a number and not a space
isNaN returns false if the value is a number
return the current value
*/
