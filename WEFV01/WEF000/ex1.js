// Part1
var test1 = 'using Var'
let test2 = 'using let'
const test3 = 'using const'

test4 = 'without '

const result = (1 + 2 - 3) * 4 / 5 % 6
console.log(result)

// Part2

// Marcus Hammond at 2022-23
let marcusHammond = {'GP':24, 'MIN': 25.4, 'FG': 0.461, '3P': 0.412, 'FT': 0.690, 'REB': 2.6, 'AST': 1.6, 'BLK': 0.3, 'TL': 0.5, 'PF': 1.8, 'TO': 1.0, 'PTS': 9.9}
let EFF = function(player){
  return (player.PTS + player.REB + player.AST + player.TL + player.BLK - player.FG - player.FT - player.TO) / player.GP
}


console.log(EFF(marcusHammond))

