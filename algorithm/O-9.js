let twoStackForQueue = function () {
    this.stackA = [];
    this.stackB = [];
}

twoStackForQueue.prototype.append = function (n) {
    this.stackA.push(n);
}
twoStackForQueue.prototype.delete = function (n) {
    if (this.stackB.length) {
        return this.stackB.pop();
    }
    while (this.stackA.length) {
        this.stackB.push(this.stackA.pop());
    }
    if(!this.stackB.length){
        return -1;
    }else{
        return this.stackB.pop();
    }
}
