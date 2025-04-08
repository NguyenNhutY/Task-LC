/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Pointer for the last position of nums1
    let i = m + n - 1;
    // Pointer for the last element of nums1
    let p1 = m - 1;
    // Pointer for the last element of nums2
    let p2 = n - 1;

    // Merge in reverse order
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
        i--;
    }

    // If there are remaining elements in nums2, copy them
    while (p2 >= 0) {
        nums1[i] = nums2[p2];
        p2--;
        i--;
    }

    // No need to copy the remaining elements of nums1, they are already in place
};

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
