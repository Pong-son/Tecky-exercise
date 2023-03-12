const complement = {'G':'C','C':'G','T': 'A', 'A': 'U'}
const rnaTranscription = (DNA) => {
  let i = 0
  let RNA = ''
  while(i < DNA.length) {
    RNA = RNA + complement[DNA[i]]
    i++
  }
  return RNA
}

console.log(rnaTranscription("GCTAGCT"))