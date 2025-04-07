/**Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.

A complete day is defined as a time duration that is an exact multiple of 24 hours.

For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

 

Example 1:

Input: hours = [12,12,30,24,24]

Output: 2

Explanation:

The pairs of indices that form a complete day are (0, 1) and (3, 4).

Example 2:

Input: hours = [72,48,24,3]

Output: 3

Explanation:

The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).

 

Constraints:

1 <= hours.length <= 100
1 <= hours[i] <= 109
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    const frequency = new Array(24).fill(0);
    let count = 0;

    // Count the frequency of each hour modulo 24
    for (const hour of hours) {
        const remainder = hour % 24;
        frequency[remainder]++;
    }

    // Count pairs for each possible hour remainder
    for (let i = 0; i < 24; i++) {
        const complement = (24 - i) % 24; // Find complement remainder
        if (i === complement) {
            // Special case where the remainder is exactly half of 24 (e.g., 12)
            count += (frequency[i] * (frequency[i] - 1)) / 2; // nC2 pairs
        } else if (i < complement) {
            // Count pairs between different remainders
            count += frequency[i] * frequency[complement];
        }
    }

    return count;
};