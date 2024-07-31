export function fizzbuzz(num:number):(number|string)[] {
  let result:(number|string)[] = []

  for(let i = 1;i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
      result.push('Fizz Buzz')
    } else if (i % 3 === 0){
      result.push('Fizz')
    } else if (i % 5 === 0 ) {
      result.push('Buzz')
    } else {
      result.push(i)
    }
  }
  return result
}