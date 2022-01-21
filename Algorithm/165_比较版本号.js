// 输入：version1 = "1.01", version2 = "1.001"
// 输出：0
// 解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// split
let compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; i++ ) {
        let x = 0;
        let y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
    }
    return 0
}

var compareVersion = function(version1, version2) {
   const l1 = version1.length;
   const l2 = version2.length;
   let i1 = 0, i2 = 0;
   while (i1 < l1 || i2 < l2) {
       let value1 = 0;
       for (; i1 < l1 && version1[i1] !== '.'; i1++) {
           value1 = value1 * 10 + version1[i1].charCodeAt() - '0'.charCodeAt();
       }
       i1++;
       let value2 = 0;
       for (; i2 < l2 && version2[i2] !== '.'; i2++) {
           value2 = value2 * 10 + version2[i2].charCodeAt() - '0'.charCodeAt();
       }
       i2++;
       if (value1 !== value2) {
           return value1 > value2 ? 1 : -1;
       }
   }
   return 0;
};
