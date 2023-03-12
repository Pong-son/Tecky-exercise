const prompt = require('prompt-sync')()

const guessNo = Math.ceil(Math.random() * 10)
let guessTime = 3
let correct = false
while(guessTime > 0 && !correct) {
  const ans = prompt('Your ans is?')
  if (parseInt(ans) === guessNo) {
    correct = true
    console.log('Bingo')
  } else if (parseInt(ans) > guessNo && guessTime !== 1) {
    console.log('Should be Smaller\n')
  } else if (parseInt(ans) < guessNo && guessTime !== 1) {
    console.log('Should be Bigger\n')
  }
  guessTime--
  if (guessTime > 0 && guessTime === 1) {
      console.log('Last Chance')
  } else if (guessTime > 0) {
    `${guessTime} times leave`
  } else if (!correct) {
    console.log(`You Lose. Correct No. is ${guessNo}`)
  }
}