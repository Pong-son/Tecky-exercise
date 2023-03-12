let amount = 1700000
let stampDuty = 0
if ( amount < 2000000 ) {
  stampDuty = amount *0.015
} else if ( amount < 2176470 ) {
  stampDuty = 30000 + (amount - 2000000) * 0.2
} else {
  stampDuty = amount * 0.3
}

console.log(stampDuty)

