/**You are given two arrays of integers, and , each of length , where represents the quantity of the type of fruit, and represents the capacity of the basket.fruitsbasketsnfruits[i]ithbaskets[j]jth

From left to right, place the fruits according to these rules:

Each fruit type must be placed in the leftmost available basket with a capacity greater than or equal to the quantity of that fruit type.
Each basket can hold only one type of fruit.
If a fruit type cannot be placed in any basket, it remains unplaced.
Return the number of fruit types that remain unplaced after all possible allocations are made.

 

Example 1:

Input: fruits = [4,2,5], baskets = [3,5,4]

Output: 1

Explanation:

fruits[0] = 4 is placed in .baskets[1] = 5
fruits[1] = 2 is placed in .baskets[0] = 3
fruits[2] = 5 cannot be placed in .baskets[2] = 4
Since one fruit type remains unplaced, we return 1.

Example 2:

Input: fruits = [3,6,1], baskets = [6,4,7]

Output: 0

Explanation:

fruits[0] = 3 is placed in .baskets[0] = 6
fruits[1] = 6 cannot be placed in (insufficient capacity) but can be placed in the next available basket, .baskets[1] = 4baskets[2] = 7
fruits[2] = 1 is placed in .baskets[1] = 4
Since all fruits are successfully placed, we return 0.

 

Constraints:

n == fruits.length == baskets.length
1 <= n <= 100
1 <= fruits[i], baskets[i] <= 1000
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let unplacedCount = 0; // Count of unplaced fruits
    let usedBaskets = new Array(baskets.length).fill(false); // Track used baskets

    for (let i = 0; i < fruits.length; i++) {
        let placed = false; // Track if the current fruit is placed

        // Try to place the fruit in the leftmost available basket
        for (let j = 0; j < baskets.length; j++) {
            if (!usedBaskets[j] && fruits[i] <= baskets[j]) {
                // Place the fruit in this basket
                usedBaskets[j] = true; // Mark the basket as used
                placed = true; // Mark the fruit as placed
                break; // Move to the next fruit
            }
        }

        // If the fruit was not placed in any basket, increment the unplaced count
        if (!placed) {
            unplacedCount++;
        }
    }

    return unplacedCount; // Return the count of unplaced fruits
};

