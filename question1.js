/*Given an array of integers nums and an integer target ,return indices of two numbers such that they add up to target.
  you may assume that each input would have exactly one solution ,and you may not use the same element twice. 

you can return the answer in any order .
 Example : 
Input:   nums=[2,7,11,15], target=9  
Output[0,1]  Explantion: Because nums[0]+nums[1]==9, we return [0,1] 

*/

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return null;
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]



