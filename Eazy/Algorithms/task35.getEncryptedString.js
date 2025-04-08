/**You are given a string s and an integer k. Encrypt the string using the following algorithm:

For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
Return the encrypted string.

 

Example 1:

Input: s = "dart", k = 3

Output: "tdar"

Explanation:

For i = 0, the 3rd character after 'd' is 't'.
For i = 1, the 3rd character after 'a' is 'd'.
For i = 2, the 3rd character after 'r' is 'a'.
For i = 3, the 3rd character after 't' is 'r'.
Example 2:

Input: s = "aaa", k = 1

Output: "aaa"

Explanation:

As all the characters are the same, the encrypted string will also be the same.

 

Constraints:

1 <= s.length <= 100
1 <= k <= 104
s consists only of lowercase English letters.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    const n = s.length;
    const encrypted = [];

    // Reduce k modulo n to handle large shifts
    const shift = k % n;
    console.log(shift + " shift"+ " n" + n + " k" + k);

    for (let i = 0; i < n; i++) {
        // Compute the new index using cyclic shift
        const newIndex = (i + shift) % n;
        encrypted.push(s[newIndex]);
    }

    return encrypted.join('');
};



console.log(getEncryptedString("dart", 3)) // Output: "tdar"
console.log(getEncryptedString("aaa", 1)); // Output: "aaa"

