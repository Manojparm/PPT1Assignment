/*Q4 you are given a large integer represented as an integer array digits,where each digits[i] is the ith digit of the integer .The digits are orderd from most significant to least significant in left-to-right order.The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
Example 1:
Input:digits =[1,2,3]
Output:[1,2,4]
Explanation :The array represents the integer 123.
Icrementing by one gives 123+1=124.
thus , the result should be [1,2,4]*/

function plusOne(digits) {
    const n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        return digits;
      }
    }
  
    // If we reach here, all digits were 9, so we need to add an additional digit
    digits.unshift(1);
    return digits;
  }
  
  // Example usage:
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]
  