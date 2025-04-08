/**Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (!intervals.length) return [];

    // Sort intervals based on the start value
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        const current = intervals[i];

        if (current[0] <= prev[1]) {
            // Merge overlapping intervals
            prev[1] = Math.max(prev[1], current[1]);
        } else {
            // No overlap, add to result
            merged.push(current);
        }
    }

    return merged;
}
