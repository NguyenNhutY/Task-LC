/**You are given a string .s

Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits.

Note that the operation cannot be performed on a digit that does not have any non-digit character to its left.

 

Example 1:

Input: s = "abc"

Output: "abc"

Explanation:

There is no digit in the string.

Example 2:

Input: s = "cb34"

Output: ""

Explanation:

First, we apply the operation on , and becomes .s[2]s"c4"

Then we apply the operation on , and becomes .s[1]s""

 

Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters and digits.
The input is generated such that it is possible to delete all digits.
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const stack = [];

   for (const char of s) {
       if (/\d/.test(char)) { // Check if the character is a digit
           if (stack.length > 0) {
               stack.pop(); // Remove the closest non-digit character
           }
           // Do not push the digit onto the stack
       } else {
           stack.push(char); // Push non-digit characters onto the stack
       }
   }

   // Join the stack to form the resulting string
   return stack.join('');
};