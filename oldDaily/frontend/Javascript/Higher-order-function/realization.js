
// forEach

Array.prototype.forEach = function (callbackfn) {
    for (let i = 0; i < this.length; i++) {
        // item index
        callbackfn(this[i], i, this)
    }
}

let a = [1,2,3];
for (let i of a) {
    console.log(i)
}