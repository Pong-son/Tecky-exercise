// 1
function range(num) {
  let arr = []
  let i = 0
  while(i < num) {
    arr.push(i)
    i++
  }
  return arr
}
console.log(range(5))
console.log(range(10))

// 2
const data = [
  {
    name: "Alex",
    yearsOfWork: 6,
    Performance: "Poor",
    monthlySalary: 10000
  },
  {
    name: "Gordon",
    yearsOfWork: 5.5,
    Performance: "Good",
    monthlySalary: 40000
  },
  {
    name: "Micheal",
    yearsOfWork: 3,
    Performance: "Good",
    monthlySalary: 80000
  },
  {
    name: "Jason",
    yearsOfWork: 7,
    Performance: "Good",
    monthlySalary: 70000
  },
  {
    name: "Brian",
    yearsOfWork: 0.5,
    Performance: "Good",
    monthlySalary: 20000
  }
]

let i = 0
let total = 0
while ( i < data.length) {
  if (data[i].yearsOfWork > 5 && data[i].Performance === "Good") {
    total = total + data[i].monthlySalary * 2
  } else if ( data[i].yearsOfWork > 1) {
    total = total + data[i].monthlySalary
  } 
  i++
}
console.log(total)