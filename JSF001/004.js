let registerNo = Math.ceil(Math.random() * 70)
let row = Math.ceil(registerNo / 7)
let column = ((registerNo -1) % 7) + 1

console.log(`Registration number: ${registerNo}`)
console.log(`Row: ${row}`)
console.log(`Column: ${column}`)
