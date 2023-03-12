const cross = '<svg xmlns="http://www.w3.org/2000/svg" class="play" width="60" height="60" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>'
const circle = '<svg xmlns="http://www.w3.org/2000/svg" class="play" width="60" height="60" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>'

const boxList = document.querySelectorAll('#play')
const chooseBox = {boxOne: 0, boxTwo: 1, boxThree: 2, boxFour: 3, boxFive: 4, boxSix: 5, boxSeven: 6, boxEight: 7, boxNine: 8}

document.querySelector('.boxes').addEventListener('click',(e) => {
  if(e.target && e.target.matches('.box')){
      boxList[chooseBox[e.target.id]].innerHTML = cross
  }
})



