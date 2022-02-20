// 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,4,7,5,3,6,8,9]

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
let findDiagonalOrder = function(mat) {
    let x = mat.length - 1 > 0 ? mat.length - 1 : 0 ;
    let y = mat[0].length - 1 > 0 ? mat[0].length - 1 : 0;
    let sum = x + y;
    let output = [];
    for (let i = 0; i <= sum; i++) {
        if (i % 2 === 0) {
            let x1 = i > x ? x : i;
            let y1 = i - x1;
            for (; x1 >= 0 && y1 >= 0; x1--, y1++) {
                if (x1 <= x && y1 <= y) {
                    output.push(mat[x1][y1])
                }
            }
        }
        else {
            let y1 = i > y ? y : i;
            let x1 = i - y1;
            for (; x1 >= 0 && y1 >= 0; x1++, y1--) {
                if (x1 <= x && y1 <= y) {
                    output.push(mat[x1][y1])
                }
            }
        }
    }
    return output;
};

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

findDiagonalOrder(mat)