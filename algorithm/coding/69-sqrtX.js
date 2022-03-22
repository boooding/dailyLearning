/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let left = 1;
    let right = x;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (mid <=  x / mid) {
            if (mid + 1 > x / (mid + 1)) return mid
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    return 0;
};

