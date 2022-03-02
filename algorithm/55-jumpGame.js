/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    const len = nums.length;
    let rightMost = 0;
    for (let i = 0; i <= rightMost; i++) {
        if (i <= rightMost) {
            console.log(i + nums[i]);
            rightMost = i + nums[i] >= rightMost ? i + nums[i] : rightMost;
            console.log(rightMost)
            if (rightMost >= len - 1) return true
        }
        console.log(rightMost)
    }
    return false
};

console.log(canJump([2,3,1,1,4]))