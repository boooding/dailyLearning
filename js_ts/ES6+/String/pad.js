// ES8
const str = 'booding'
console.log(str.padStart(9, 'tang'))
console.log(str.padEnd(10, 'tang'))
console.log(str.padEnd(1, 'tang'))

// application

const now = new Date()
const year = now.getFullYear();
const month = now.getMonth() + 1 + '';
const day = now.getDate() + '';
console.log(year, month.padStart(2, '0'), day.padStart(2, '0'))
