/**Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    if (x < 2) return x;

    let left = 1, right = Math.floor(x / 2), result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midSquared = mid * mid;

        if (midSquared === x) {
            return mid;
        } else if (midSquared < x) {
            result = mid;       // mid could be the answer, but there might be a larger one
            left = mid + 1;
        } else {
            right = mid - 1;    // mid^2 too large
        }
    }

    return result;
}
