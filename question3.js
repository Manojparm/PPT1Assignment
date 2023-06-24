/*User
Given a sorted array of distinct integers and a target value,return the index if the target 
is found.If not ,return the index where it would be if it were inserted in order .
you must write an alogrithim with 0(log n) runtime complexity.
Example 1:
Input: nums=[1,3,5,6],target=5
output:2

*/

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    // Target value not found, return the insertion position
    return left;
  }
  
  // Example usage:
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  console.log(result); // Output: 2
  