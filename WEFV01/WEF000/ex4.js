function reverseString(target){
  let output = []
  for(let i = target.length - 1; i > -1; i--) {
    output.push(target[i])
  }
  return console.log(output.join(''))
}

reverseString("cool")