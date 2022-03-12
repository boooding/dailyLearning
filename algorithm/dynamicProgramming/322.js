/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function(coins, amount) {
    let count = 0;
    // coins sort
    coins.sort().reverse();
    for (let i in coins) {
        const coinNum = Math.floor(amount/coins[i]);
        count = count + coinNum;
        amount = amount - coins[i] * coinNum;
        if (amount === 0) {
            return count
        }
    }
};

let getMinCoinCountOfValue = (total, values, valueIndex) => {
    let valuesCount = values.length;
    if (valueIndex === valuesCount) {
        return Number.MAX_VALUE;
    }
    let minResult = Number.MIN_SAFE_INTEGER
}
