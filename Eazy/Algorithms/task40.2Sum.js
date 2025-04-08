/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = {}; // To store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement

        // Check if the complement exists in the map
        if (complement in numMap) {
            return [numMap[complement], i]; // Return indices if found
        }

        // Store the current number and its index in the map
        numMap[nums[i]] = i;
    }

    return []; // In case there's no solution (not needed according to problem statement)
};

