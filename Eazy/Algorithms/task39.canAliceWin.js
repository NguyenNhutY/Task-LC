/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let totalSum = 0;
    let singleDigitSum = 0;
    let doubleDigitSum = 0;

    // Calculate the total sum, single-digit sum, and double-digit sum
    for (let num of nums) {
        totalSum += num;
        if (num < 10) {
            singleDigitSum += num;
        } else {
            doubleDigitSum += num;
        }
    }

    // Check if Alice can win by choosing single-digit numbers
    if (singleDigitSum > totalSum - singleDigitSum) {
        return true;
    }

    // Check if Alice can win by choosing double-digit numbers
    if (doubleDigitSum > totalSum - doubleDigitSum) {
        return true;
    }

    // If neither condition is met, return false
    return false;
};

// Example Usage:
console.log(canAliceWin([1, 2, 3, 4, 10])); // Output: false
console.log(canAliceWin([1, 2, 3, 4, 5, 14])); // Output: true
console.log(canAliceWin([5, 5, 5, 25])); // Output: true
