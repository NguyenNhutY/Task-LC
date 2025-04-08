/**Given an array , you can perform the following operation any number of times:nums

Select the adjacent pair with the minimum sum in . If multiple such pairs exist, choose the leftmost one.nums
Replace the pair with their sum.
Return the minimum number of operations needed to make the array non-decreasing.

An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

 

Example 1:

Input: nums = [5,2,3,1]

Output: 2

Explanation:

The pair has the minimum sum of 4. After replacement, .(3,1)nums = [5,2,4]
The pair has the minimum sum of 6. After replacement, .(2,4)nums = [5,6]
The array became non-decreasing in two operations.nums

Example 2:

Input: nums = [1,2,2]

Output: 0

Explanation:

The array is already sorted.nums

 

Constraints:

1 <= nums.length <= 50
-1000 <= nums[i] <= 1000
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let operations = 0;

  while (!isNonDecreasing(nums)) {
      let minSum = Infinity;
      let minIndex = -1;

      // Step 1: Find the leftmost adjacent pair with minimum sum
      for (let i = 0; i < nums.length - 1; i++) {
          let sum = nums[i] + nums[i + 1];
          if (sum < minSum) {
              minSum = sum;
              minIndex = i;
          }
      }

      // Step 2: Replace the pair with their sum
      nums.splice(minIndex, 2, nums[minIndex] + nums[minIndex + 1]);

      operations++;
  }

  return operations;
};

// Helper function to check if array is non-decreasing
function isNonDecreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};