let markSix = [
  '3 5 30 31 43 48',
  '2 11 13 45 46 49',
  '11 14 21 28 37 44',
  '18 29 32 33 36 40',
  '2 20 24 30 32 46',
  '5 17 35 37 42 49',
  '1 24 25 27 31 37',
  '15 17 29 30 34 37',
  '5 10 18 20 28 33',
  '1 22 25 27 31 36'
]

let newArr = []
for (let nums of markSix) {
  let newData = nums.split(' ')
  newArr.push(newData)
}

let occurrenceCount = {}
for (let item of newArr) {
  let i = 0
  while (i < item.length) {
    if(occurrenceCount[item[i]] == null) {
      occurrenceCount[item[i]] = 1
    } else {
      occurrenceCount[item[i]] ++
    }
    i++
  }
}
let highestNo = 0
let resultNo = null
for (let result in occurrenceCount) {
  if(occurrenceCount[result] > highestNo) {
    highestNo = occurrenceCount[result]
    resultNo = result
  }
}
console.log(`Highest Occurrence is ${resultNo}, it present ${highestNo} times`)