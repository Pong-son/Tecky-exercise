let min1 = (63 - 63 % 60)
let s1 = 63 % 60
console.log(min1/60 + 'm' + s1 + 's')

let s2 = 27369 % 60
let min2 = (27369 - s2) % 3600
let hr2 = 27369 - min2 -s2

console.log(hr2/3600 + 'h' + min2/60 + 'm' + s2 + 's')
