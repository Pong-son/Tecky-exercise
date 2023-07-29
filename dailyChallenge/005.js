const target = [0,1,[2,3,,4],[],5]

let output = []
let typeOfOutput = []
target.map(nos => {
  if (!Array.isArray(nos) && nos) {
    output.push(nos)
  } else if (Array.isArray(nos)) {
    nos?.map(no => {
      if (no) {
        output.push(no)
      }
    })
  }
})

console.log(output)