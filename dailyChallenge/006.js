const readlineSync = require('readline-sync')

const letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const choice = readlineSync.question('Your Choice: ')

const startNo = letter.findIndex(letter=>letter === choice.toUpperCase())

for (let i = 0; i < startNo + 1; i++) {
  let row = ''
  for (let j = (startNo * -1); j < startNo + 1; j++) {
    if( Math.abs(i) === Math.abs(j)) {
      row += letter[Math.abs(j)]
    } else {
      row += " "
    }
  }
  console.log(row)
}
for (let i = startNo - 1; i >= 0; i--) {
  let row = ''
  for (let j = (startNo * -1); j < startNo + 1; j++) {
    if( Math.abs(i) === Math.abs(j)) {
      row += letter[Math.abs(j)]
    } else {
      row += " "
    }
  }
  console.log(row)
}

