/**Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 

Follow up: Could you solve the problem in linear time and in O(1) space?
 * @param {number[]} nums
 * @return {number[]}
 */function majorityElement(nums) {
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    // Step 1: Find potential candidates
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Validate candidates
    count1 = 0;
    count2 = 0;

    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const result = [];
    const n = nums.length;

    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);

    return result;
}
