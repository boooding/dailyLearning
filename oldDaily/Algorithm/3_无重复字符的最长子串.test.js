/*
    给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
s = "abcabcbb" => 3
s = "bbbbb" => 1

 */

const lengthOfLongestSubstring = (s) => {
    const occ = new Set();
    const len = s.length;
    let rightPointer = -1, result = 0;
    for (let leftPointer = 0; leftPointer < len; leftPointer++) {
        if (leftPointer !== 0) {
            occ.delete(s.charAt(leftPointer-1))
        }
        while (rightPointer + 1 < len && !occ.has((s.charAt(rightPointer + 1)))) {
            occ.add(s.charAt(rightPointer + 1));
            rightPointer++;
        }
        result = Math.max(result, rightPointer - leftPointer + 1)
    }
    return result;
}





// const add = (a, b) => {
//     const occ = new Set();
// }
//
// test('add', () => {
//     expect(add(1,2)).toBe(3)
// })