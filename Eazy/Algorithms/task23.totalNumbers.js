/**You are given an array of digits called digits. Your task is to determine the number of distinct three-digit even numbers that can be formed using these digits.

Note: Each copy of a digit can only be used once per number, and there may not be leading zeros.

 

Example 1:

Input: digits = [1,2,3,4]

Output: 12

Explanation: The 12 distinct 3-digit even numbers that can be formed are 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432. Note that 222 cannot be formed because there is only 1 copy of the digit 2.

Example 2:

Input: digits = [0,2,2]

Output: 2

Explanation: The only 3-digit even numbers that can be formed are 202 and 220. Note that the digit 2 can be used twice because it appears twice in the array.

Example 3:

Input: digits = [6,6,6]

Output: 1

Explanation: Only 666 can be formed.

Example 4:

Input: digits = [1,3,5]

Output: 0

Explanation: No even 3-digit numbers can be formed.

 

Constraints:

3 <= digits.length <= 10
0 <= digits[i] <= 9
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let distinctNumbers = new Set();

    // Loop through the digits to find possible last digits
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) { // Check if the digit is even
            const lastDigit = digits[i];
            const remainingDigits = [...digits.slice(0, i), ...digits.slice(i + 1)]; // Digits without the current even digit

            // Generate combinations of the first two digits
            for (let j = 0; j < remainingDigits.length; j++) {
                for (let k = 0; k < remainingDigits.length; k++) {
                    if (j !== k) { // Ensure digits are not the same index
                        const firstDigit = remainingDigits[j];
                        const secondDigit = remainingDigits[k];

                        // Check for leading zero
                        if (firstDigit !== 0) {
                            const number = `${firstDigit}${secondDigit}${lastDigit}`;
                            distinctNumbers.add(number); // Add to set
                        }
                    }
                }
            }
        }
    }

    return distinctNumbers.size; // Return the count of distinct numbers
};