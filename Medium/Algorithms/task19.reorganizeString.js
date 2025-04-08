/**Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

 

Example 1:

Input: s = "aab"
Output: "aba"
Example 2:

Input: s = "aaab"
Output: ""
 

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
 * @param {string} s
 * @return {string}
 */
function reorganizeString(s) {
    const freq = new Map();

    // Count frequency of each char
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // Max heap using array sorted by frequency
    let heap = Array.from(freq.entries());
    heap.sort((a, b) => b[1] - a[1]);

    let result = '';
    let prev = [null, 0];

    while (heap.length > 0) {
        let [char, count] = heap.shift(); // take the most frequent

        result += char;
        count--;

        if (prev[1] > 0) {
            heap.push(prev);
        }

        // Re-sort heap after possible push
        heap.sort((a, b) => b[1] - a[1]);

        prev = [char, count];
    }

    return result.length === s.length ? result : "";
}
