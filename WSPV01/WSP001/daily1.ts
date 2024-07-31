// Matching Brackets
function stack(input:string):void {
  const pairs = {
    ")":"(",
    "]":"[",
    "}":"{"
  }
  let pairsArray = Object.values(pairs)
  let strings:string[] = input.split('')
  let verify:string[] = []

  for (const i of strings){
    for(let j = 0; j < 3;j++) {
      if(i === pairsArray[j]) {
        verify.push(i)
      }
    }

    if(pairs[i] !== undefined && pairs[i] === verify[verify.length-1]){
      console.log("Pair correctly")
      verify.pop()
    } else if (pairs[i] !== undefined ) {
      console.log("Wrong Pair")
      verify.pop()
    }
  }
}

stack("te(s[)t]")