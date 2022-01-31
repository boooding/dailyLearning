/**
 * @param {string} columnTitle
 * @return {number}
 */
let titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i of columnTitle) {
        result = 26 * result + (i.charCodeAt() - 'A'.charCodeAt() + 1)
    }
    return result;
};

