/* Q6:Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true */

function containsDuplicate(nums) {
    const uniqueSet = new Set();
  
    for (let num of nums) {
      if (uniqueSet.has(num)) {
        return true; // Duplicate found
      }
      uniqueSet.add(num);
    }
  
    return false; // No duplicates found
  }
  
  // Example usage:
  const nums = [1, 2, 3, 1];
  const result = containsDuplicate(nums);
  console.log(result); // Output: true
  