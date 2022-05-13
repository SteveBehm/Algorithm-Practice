/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // store the value at index i, which changes with each iteration of the loop
    let num1 = nums[i];
    // store the difference between the target and num1 so we can check to see if
    // number is store in the map
    let num2 = target - num1;
    if (map.has(num2)) {
      // if num2 is in our map then we want to display num1 and num2's indicies in
      // an array and return it from the function
      return [map.get(num2), i];
    }
    // if num2 is not present in the map then we just store num1 and its index in the map
    map.set(num1, i)
  }
}
