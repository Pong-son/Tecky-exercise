const series = (input:string, digit:number):void => {
  if(digit > input.length) {
    console.log(input)
    return
  }
  for(let i = 0; i < input.length - digit + 1; i++) {
    console.log(input.slice(i,i+digit))
  }
  // for( let i of input) {
  //   console.log(i)
  // }
  // console.log(input.length,digit)
}

series("49142",4)