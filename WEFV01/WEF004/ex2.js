let turn = 1
let resultArr = []
const cross = '<svg xmlns="http://www.w3.org/2000/svg" class="play" width="60" height="60" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>'
const circle = '<svg xmlns="http://www.w3.org/2000/svg" class="play" width="60" height="60" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>'

const boxList = document.querySelectorAll('#play')
const chooseBox = {boxOne: 0, boxTwo: 1, boxThree: 2, boxFour: 3, boxFive: 4, boxSix: 5, boxSeven: 6, boxEight: 7, boxNine: 8}

document.querySelector('.boxes').addEventListener('click',toggle)

const restart = document.querySelector('.restart')
restart.addEventListener('click',() => {
  turn = 1
  resultArr = []
  for (let i = 0; i < boxList.length; i++) {
    boxList[i].innerHTML = ''
  }
  document.querySelector('.boxes').addEventListener('click',toggle)
})

// add Event Listener to toggle
function toggle(e)  {
  console.log(e.target)
  if(e.target && e.target.matches('.box')){
    if(turn % 2 === 1) {
      boxList[chooseBox[e.target.id]].innerHTML = circle
      resultArr[chooseBox[e.target.id]] = (turn % 2) + 1
      document.querySelector('#turn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>'
    } else if (turn % 2 === 0) {
      boxList[chooseBox[e.target.id]].innerHTML = cross
      resultArr[chooseBox[e.target.id]] = (turn % 2) + 1
      document.querySelector('#turn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>'
    }
  }
  turn++
  result(e)
}
// winning situation
function result(e) {
  let finish = false
  if (finish === false) {
    if (resultArr[0] && resultArr[1] && resultArr[2] && resultArr[3] && resultArr[4] && resultArr[5]  && resultArr[6] && resultArr[7] && resultArr[8]) {
      finish = true
    }
  }
  if (
    (resultArr[0] && resultArr[1] && resultArr[2] && resultArr[0] === resultArr[1] && resultArr[1] === resultArr[2]) ||
    (resultArr[3] && resultArr[4] && resultArr[5] && resultArr[3] === resultArr[4] && resultArr[4] === resultArr[5]) ||
    (resultArr[6] && resultArr[7] && resultArr[8] && resultArr[6] === resultArr[7] && resultArr[7] === resultArr[8]) ||
    (resultArr[0] && resultArr[3] && resultArr[6] && resultArr[0] === resultArr[3] && resultArr[3] === resultArr[6]) ||
    (resultArr[1] && resultArr[4] && resultArr[7] && resultArr[1] === resultArr[4] && resultArr[4] === resultArr[7]) ||
    (resultArr[2] && resultArr[5] && resultArr[8] && resultArr[2] === resultArr[5] && resultArr[5] === resultArr[8]) ||
    (resultArr[0] && resultArr[4] && resultArr[8] && resultArr[0] === resultArr[4] && resultArr[4] === resultArr[8]) ||
    (resultArr[2] && resultArr[4] && resultArr[6] && resultArr[2] === resultArr[4] && resultArr[4] === resultArr[6]) 
  ) {
    if (turn % 2) {
      (document.querySelector('#crossScore').textContent)++
    } else {
      (document.querySelector('#circleScore').textContent)++
    }
    alert(`${(turn % 2)?'Cross':'Cricle'} Win`)
    document.querySelector('.boxes').removeEventListener('click',toggle)
  }  else if (finish) {
    alert('Draw')
    document.querySelector('.boxes').removeEventListener('click',toggle)
  }
}

