const date = new Date('January 24, 2015, 22:00 GMT+00:00')
let output =new Date()
function gigaSecond() {
  output.setTime(date.getTime() + 1000000000 *1000)
}
gigaSecond()
console.log(output)
