// ES9
// for await of

//
const arr = [
    'es5',
    'es6',
    'es7',
    'es8'
]
arr[Symbol.iterator] = function () {
    let nextIndex = 0;
    return {
        next() {
            return nextIndex < arr.length ? {
                value: arr[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}
for (let item of arr) {
    console.log(item)
}

arr[Symbol.asyncIterator] = function () {
    let nextIndex = 0;
    return {
        next() {
            return nextIndex < arr.length ?
                arr[nextIndex++] :
                Promise.resolve({
                    value: undefined,
                    done: true
                })
        }
    }
}

async function test() {
    for await (let item of arr) {
        console.log(item)
    }
}

