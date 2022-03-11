// const path = require('path');
// const fs = require('fs')
//
// const pathName =  path.basename(__filename)
//
// console.log(pathName)
// fs.readFileSync()
//
// function simulatedBasename(pathName) {
//     return pathName.split('/').reverse()[0];
// }
//
// console.log(simulatedBasename(__filename))

const fs = require("fs");
const path = require("path");
const fileTraverse = (filePath, operationToFile) => {
    fs.readdir(filePath, (err, files) => {
        if (err) {
            return console.warn(err)
        }
        files.forEach((file) => {
            const fileDir = path.join(filePath, file);
            fs.stat(fileDir, (err, stats) => {
                if (err) {
                    console.warn('failed in get stats')
                } else {
                    if (stats.isFile()) {
                        operationToFile(fileDir)
                    } else if (stats.isDirectory()) {
                        fileTraverse(fileDir)
                    }
                }
            })
        })
    })
}
fileTraverse(__dirname, (fileDir) => {
    console.log(fileDir)
})
