let arr = [
  {"date": "1 Jan", "minTemperature": 11, "maxTemperature": 18},
  {"date": "2 Jan", "minTemperature": 10, "maxTemperature": 17},
  {"date": "3 Jan", "minTemperature": 12, "maxTemperature": 17},
  {"date": "4 Jan", "minTemperature": 14, "maxTemperature": 19},
  {"date": "5 Jan", "minTemperature": 8, "maxTemperature": 21},
  {"date": "6 Jan", "minTemperature": 17, "maxTemperature": 21},
  {"date": "7 Jan", "minTemperature": 18, "maxTemperature": 22},
]
const newArr = arr.slice()
// 1
const newArr1 = newArr.sort((a,b) => {
  if (a.minTemperature - b.minTemperature > 0) {
    return -1
  } else if (a.minTemperature - b.minTemperature < 0) {
    return 1
  } else {
    return 0
  }
})
console.log(newArr1)

// 2
let newArr2 = []
arr.map(item => {
  newArr2.push(item.date)
})
console.log(newArr2)

// 3
let newArr3 = arr.filter(item => (item.maxTemperature > 20
))
console.log(newArr3)

// 4
let newArr4 = arr.reduce((prev, curr) => {
  if (prev.minTemperature < curr.minTemperature) {
    return prev
  } else {
    return curr
  }
})
console.log(newArr4)