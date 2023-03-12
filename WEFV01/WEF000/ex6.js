const bid1 = [2,3]
let checkBid = [[2, 4], [2, 5], [7, 9]]
const markSiResult = [1, 3, 5, 7, 9, 11]

const checkMarkSix = (results, bid) => {
  let resultArr = []
  results.map(result => {
    bid.map((no,index) => {
      if(no === result){
        return resultArr[index] = true
      } else if (resultArr[index] == null) {
        resultArr[index] = false
      }
    })
  })
  return resultArr[0] && resultArr[1]
}

console.log(checkMarkSix(markSiResult, bid1))
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]))
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]))
console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]))

const quickPicks = (results, noOfBid) => {
  let resultArr = []
  for (let i = 0; i < noOfBid; i++) {
    
    let bidResult = {"bid": checkBid[i], "win": checkMarkSix(results, checkBid[i])}
    resultArr.push(bidResult)
  }
  console.log(`The mark six result: ${results}\n`)
  for (let i = 0; i < noOfBid; i++) {
    setTimeout(() => {
      console.log(`Your quick pick: ${resultArr[i].bid}\n${(resultArr[i].win === true)?'WIN':'LOSE'}\n`)
    },1000 * (1 + i))
    clearTimeout()
  }
}

quickPicks([1, 3, 5, 7, 9, 11], 3)