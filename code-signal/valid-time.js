/*
First we need to split the time string at the semicolon and store it in a variable
the splitTime arr will have two values
the first is the hour value and the second is the minutes value
if the first value is 24 or greater or the second value is 60 or greater
return false
if not return true
*/

function solution(time) {
    const splitTime = time.split(':');

    if (parseInt(splitTime[0]) >= 24 || parseInt(splitTime[1]) >= 60) {
        return false;
    }
    return true;
}
