/**Given an integer array , return if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or otherwise.numstruefalse

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    
    // If the total sum is odd, we cannot partition it into two equal subsets
    if (totalSum % 2 !== 0) {
        return false;
    }
    
    const target = totalSum / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true; // Zero sum is always possible with an empty subset

    // Iterate through each number in nums
    for (const num of nums) {
        // Update the dp array from back to front
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    // The answer is whether we can form the target sum
    return dp[target];
};

// Example Usage:
console.log(canPartition([1, 5, 11, 5])); // Output: true
console.log(canPartition([1, 2, 3, 5])); // Output: false
