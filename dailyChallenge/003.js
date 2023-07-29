// ELT
const score = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10:["Q", "Z"]
}

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const newSystem = {}
letters.map(letter => {
  for ( let i = 0; i < Object.keys(score).length; i++) {
    for (let j = 0; j < score[Object.keys(score)[i]].length; j++) {
      if( letter === score[Object.keys(score)[i]][j]) {
        newSystem[score[Object.keys(score)[i]][j]] = Object.keys(score)[i]
      }
    }
  }
})

console.log(newSystem)