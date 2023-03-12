// 1
let i = 10
while( i > -1) {
  console.log(i)
  i--
}

// 2
i = 0
while (i < 6) {
  let result = ''
  let a = 0
  let b = 5
  while (a < i) {
    result = result + ' '
    a++
  }
  while (b > i) {
    result = result + '*'
    b--
  }
  i++
  console.log(result)
}