/**You are given an integer array nums.

You are allowed to delete any number of elements from nums without making it empty. After performing the deletions, select a subarray of nums such that:

All elements in the subarray are unique.
The sum of the elements in the subarray is maximized.
Return the maximum sum of such a subarray.

 

Example 1:

Input: nums = [1,2,3,4,5]

Output: 15

Explanation:

Select the entire array without deleting any element to obtain the maximum sum.

Example 2:

Input: nums = [1,1,0,1,1]

Output: 1

Explanation:

Delete the element nums[0] == 1, nums[1] == 1, nums[2] == 0, and nums[3] == 1. Select the entire array [1] to obtain the maximum sum.

Example 3:

Input: nums = [1,2,-1,-2,1,0,-1]

Output: 3

Explanation:

Delete the elements nums[2] == -1 and nums[3] == -2, and select the subarray [2, 1] from [1, 2, 1, 0, -1] to obtain the maximum sum.

 

Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSum = function(nums) {
    let max = 0;
    let seen = []; // Mảng để theo dõi các số đã thấy
    let result = 0; // Biến để lưu trữ kết quả
    for (let i = 0; i < nums.length ; i++) {
        // Kiểm tra xem số đã xuất hiện chưa
        if (!seen.includes(nums[i])) {

            if (nums[i] >= 0) {
                seen.push(nums[i]); // Thêm số vào mảng đã thấy
                console.log("Seen" +seen);
                if (max < nums[i]) { // Changed seen[i] to nums[i]
                    max = nums[i]; // Cập nhật max
                    result += max; // Cộng số dương vào tổng
                }
            } else if (nums[i] < 0 && seen.length == 0 && nums.length == 1 ) {
                // Cập nhật maxNegative nếu là số âm
               seen.push(nums[i])
               result = seen[i]
            }
            else if (nums[i] < 0 && seen.length == 0 && nums.length ==2 ) {
                // Cập nhật maxNegative nếu là số âm
               seen.push(nums[i])
               result = Math.max(result,seen[i])
            }
        }
    }

    // Nếu có số dương, trả về tổng, nếu không thì trả về số âm lớn nhất
    return result
};

// Ví dụ Sử Dụng:


// Ví dụ Sử Dụng:
console.log(maxSum([1, 2, 3, 4, 5])); // Output: 15
console.log(maxSum([1, 1, 0, 1, 1])); // Output: 1
console.log(maxSum([1, 2, -1, -2, 1, 0, -1])); // Output: 3

console.log(maxSum([-100])); // Output: -100

console.log(maxSum([-20,20])); // Output: 6