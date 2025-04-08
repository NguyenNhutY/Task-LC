/**function canConstruct(ransomNote, magazine) {
    const map = new Array(26).fill(0);

    for (let ch of magazine) {
        map[ch.charCodeAt(0) - 97]++;
    }

    for (let ch of ransomNote) {
        const index = ch.charCodeAt(0) - 97;
        if (map[index] === 0) return false;
        map[index]--;
    }

    return true;
}

 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    const map = new Array(26).fill(0);

    for (let ch of magazine) {
        map[ch.charCodeAt(0) - 97]++;
    }

    for (let ch of ransomNote) {
        const index = ch.charCodeAt(0) - 97;
        if (map[index] === 0) return false;
        map[index]--;
    }

    return true;
}
