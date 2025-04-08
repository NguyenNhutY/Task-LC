/**function allCellsDistOrder(rows, cols, rCenter, cCenter) {
    const result = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            result.push([r, c]);
        }
    }

    result.sort((a, b) => {
        const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
        const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
        return distA - distB;
    });

    return result;
}

 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
function allCellsDistOrder(rows, cols, rCenter, cCenter) {
    const result = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            result.push([r, c]);
        }
    }

    result.sort((a, b) => {
        const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
        const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
        return distA - distB;
    });

    return result;
}
