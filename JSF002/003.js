// 1
let array = []
let i = 0
while (i < 10) {
  let printNo = Math.ceil(Math.random() * 10)
  array.push(printNo)
  i++
}
console.log(array)

// 2
let array2 = []
i = 0
while (i < 10) {
  let printNo = Math.ceil(Math.random() * 10)
  if (printNo % 2 === 0) {
    array2.push(printNo)
  } else {
    array2.unshift(printNo)
  }
  i++
}
console.log(array2)
