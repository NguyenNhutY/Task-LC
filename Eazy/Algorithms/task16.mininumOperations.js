/**Easy
Topics
Companies
Hint
You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.

 

Example 1:

Input: nums = [1,2,3,4]

Output: 3

Explanation:

All array elements can be made divisible by 3 using 3 operations:

Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.
Example 2:

Input: nums = [3,6,9]

Output: 0

 

Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let totalOperations = 0;

    for (let i = 0; i < nums.length; i++) {
        let remainder = nums[i] % 3;
        if (remainder !==0)
        {
             let remainder = (nums[i] - 1) % 3;
             if (remainder !== 0)
             {
                let remainder = (nums[i] + 1) % 3;
                console.log("Remainder =" +remainder)
                totalOperations += 1; // remainder will be 0, 1, or 2

             } else{
                totalOperations += 1; // remainder will be 0, 1, or 2

             }
        }
        // If remainder is 1, we need 1 operation to make it divisible by 3
        // If remainder is 2, we also need 1 operation to make it divisible by 3
};
return totalOperations;
};
// Example usage:
let nums = [1, 2, 3, 4];
console.log(minimumOperations(nums)); // Output: 3
nums = [3, 6, 9];
console.log(minimumOperations(nums)); // Output: 0
nums = [1, 2, 3, 4, 5];
console.log(minimumOperations(nums)); // Output: 6
