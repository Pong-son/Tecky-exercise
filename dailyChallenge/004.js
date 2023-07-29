const colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

const input = ['Brown', 'Green','Violet']

let output = ''

input.map((color, index) => {
  if (index < 2) {
    output += colors[color.toLowerCase()]
  }
})
console.log(output)