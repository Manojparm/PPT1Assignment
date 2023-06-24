/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
function moveZeroes(nums) {
    let writePtr = 0;
  
    for (let readPtr = 0; readPtr < nums.length; readPtr++) {
      if (nums[readPtr] !== 0) {
        nums[writePtr] = nums[readPtr];
        writePtr++;
      }
    }
  
    while (writePtr < nums.length) {
      nums[writePtr] = 0;
      writePtr++;
    }
  }
  
  // Example usage:
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]
  