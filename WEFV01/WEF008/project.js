// Model/data
let modeColor = {
  dark:true,
  backgroundColor:'black',
  fontColor:'white',
  box0Color:'white',
  box1Color:'lightgreen',
  box2Color:'green',
  box3Color:'darkgreen',
  blkBgColor:'white',
  strokeColor:'black',
  selectStrokeColor:'blue',
  stableColor:'black'
}

document.querySelector('#surNeiLess').value = 2
document.querySelector('#surNeiMore').value = 3
document.querySelector('#surCur').value = 1
document.querySelector('#repNei').value = 3
document.querySelector('#repCur').value = 0

let scrSize = "middle"
let start = false
let countDie = 0
document.querySelector('#dieCount').textContent = countDie
let countBorn = 0
document.querySelector('#bornCount').textContent = countBorn
const startStopBtn = () => {
  changeStartBtn()
  start = !start
}
const startbtn = document.querySelector('#startBtn')
let turnNo = document.querySelector('#turnCount')
let frameNo = 0

const condition = {
  // Survival
  surNeiLess:2,
  surNeiMore:3,
  surCurrent:1,
  // Reproduction
  repCurrent:0,
  repNei:3
}

let slider

let currentBoard
let nextBoard

let speed = document.querySelector('#controlSpeed')
let speedValue = document.querySelector('[for="controlSpeed"]')
speedValue.textContent = speed.value
let fr = 1
speed.addEventListener('change',(e) => {
  speedValue.textContent = e.target.value
  setFrame(parseInt(e.target.value))
  if (start === true) {
    loop()
  } else {
    noLoop()
  }
})
let size = document.querySelector('#controlSize')
let sizeValue = document.querySelector('[for="controlSize"]')
sizeValue.textContent = size.value
let unitLength = parseInt(size.value)
size.addEventListener('change',(e) => {
  sizeValue.textContent = e.target.value
  unitLength = parseInt(e.target.value)
  redraw()
  if (start === true) {
    loop()
  } else {
    noLoop()
  }
})

let columns = Math.floor(8000  / unitLength)
let rows    = Math.floor(3500 / unitLength)

function setup(){
  /* Set the canvas to be under the element #canvas*/
	const canvas = createCanvas(unitLength * floor((windowWidth - 100)/1.5/unitLength), unitLength * floor((windowHeight - 200)/1.5/unitLength));
	canvas.parent(document.querySelector('#canvas'));
	/*Calculate the number of columns and rows */

	/*Making both currentBoard and nextBoard 2-dimensional matrix that has (columns * rows) boxes. */
	currentBoard = [];
	nextBoard = [];
  staticStatus = {}
	for (let i = 0; i < columns; i++) {
    currentBoard[i] = [];
		nextBoard[i] = []
  }
	// Now both currentBoard and nextBoard are array of array of undefined values.
	initRandomState();  // Set the initial values of the currentBoard and nextBoard
  keyPressed()
  noLoop()
}
function setFrame(value) {
  return fr = value
}
function draw() {
  frameRate(fr)
  turnNo.textContent = frameNo
  background(modeColor.blkBgColor);
  if(start) {
    generate();
  }
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (currentBoard[i][j] === 1){
        fill(modeColor.box1Color);  
      } else if (currentBoard[i][j] === 2) {
        fill(modeColor.box2Color)
      } else if (currentBoard[i][j] === 3) {
        fill(modeColor.box3Color)
      } else {
        fill(modeColor.box0Color);
      }
      if (staticStatus[i+''+j] > 3 && currentBoard[i][j] >= 1) {
        fill(modeColor.stableColor)
      }
      stroke(modeColor.strokeColor)
      rect(i * unitLength, j * unitLength, unitLength, unitLength);
    }
  }
  if (start) {
    frameNo++
  }
  document.querySelector('#dieCount').textContent = countDie
  document.querySelector('#bornCount').textContent = countBorn
}
function generate() {
  //Loop over every single box on the board
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      // Count all living members in the Moore neighborhood(8 boxes surrounding)
      let neighbors = 0;
      for (let i of [-1, 0, 1]) {
        for (let j of [-1, 0, 1]) {
          if(i === 0 && j === 0){
            // the cell itself is not its own neighbor
            continue
          }
          // The modulo operator is crucial for wrapping on the edge
          if (noBoundary) {
          neighbors += (currentBoard[(x + i + columns) % columns][(y + j + rows) % rows]> 0)?1:0 
        } else {
          if ( columns > (x + i) && (x + i) >= 0 && rows > (y + j) && (y + j) >= 0) {
            neighbors += ((currentBoard[x + i][y + j]) > 0)?1:0
          }
        }
      }
    }
      // Rules of Life
      if (currentBoard[x][y] >= condition.surCurrent && neighbors < condition.surNeiLess) {
        // "Die" of Loneliness
        nextBoard[x][y] = 0;
        staticStatus[x + '' + y] = 0
        countDie++
      } else if (currentBoard[x][y] >= condition.surCurrent && neighbors > condition.surNeiMore) {
        // "Die" of Overpopulation
        nextBoard[x][y] = 0;
        staticStatus[x + '' + y] = 0
        countDie++
      } else if (currentBoard[x][y] >= condition.surCurrent && (neighbors === condition.surNeiLess || neighbors === condition.surNeiMore)) {
        // "unchange"
        nextBoard[x][y] = neighbors;
        // count for stable
        if (nextBoard[x][y] === currentBoard[x][y]) {
          staticStatus[x + '' + y]++
        } else {
          staticStatus[x + '' + y] = 0
        }
      } else if (currentBoard[x][y] === condition.repCurrent && neighbors === condition.repNei) {
        // New life due to Reproduction
        nextBoard[x][y] = 1;
        staticStatus[x + '' + y] = 0
        countBorn++
      } else {
        // Static
        nextBoard[x][y] = currentBoard[x][y];
        if (currentBoard[x][y] > 0) {
          staticStatus[x + '' + y]++
        }
      }
    }
  }
  // document.querySelector('#born').innerHTML = countBorn
  // document.querySelector('#die').innerHTML = countDie
  // Swap the nextBoard to be the current Board
  [currentBoard, nextBoard] = [nextBoard, currentBoard];
}

/**
 * When mouse is dragged
*/
let pointer = {x:0,y:0}
let prePointer = {x:0,y:0}

// mouseEvent
function mouseDragged() {
  if(pointer.x < 0) {
    ''
  } else {
    prePointer.x = pointer.x
  }
  if(pointer.y < 0) {
    ''
  } else {
    prePointer.y = pointer.y
  }
  /**
   * If the mouse coordinate is outside the board
  */
 pointer.x = Math.floor(mouseX / unitLength);
 pointer.y = Math.floor(mouseY / unitLength);
  if (pointer.x !== prePointer.x || pointer.y !== prePointer.y) {
    if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
      return;
    }
    if (mouseX < -1 || mouseY < -1) {
        return;
    }
    if (currentBoard[pointer.x][pointer.y] === 0) {
      currentBoard[pointer.x][pointer.y] = 1
      fill(modeColor.box1Color)
      stroke(modeColor.strokeColor)
      rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
    } else {
      currentBoard[pointer.x][pointer.y] = 0
      fill(modeColor.box0Color)
      rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
    }
  } else {
  }
  blocked()
  // return pointer
}
function mousePressed() {
  pointer.x = Math.floor(mouseX / unitLength)
  pointer.y = Math.floor(mouseY / unitLength)
  if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
    return;
  }
  if (mouseX < -1 || mouseY < -1) {
    return;
  }
  if (currentBoard[pointer.x][pointer.y] === 0) {
    currentBoard[pointer.x][pointer.y] = 1
    fill(modeColor.box1Color)
    stroke(modeColor.strokeColor)
    rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
  } else {
    currentBoard[pointer.x][pointer.y] = 0
    fill(modeColor.box1Color)
    rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
  }
  blocked()
  noLoop()
}
function mouseReleased() {
  stroke(modeColor.strokeColor)
  if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
    return;
  }
  if (mouseX < -1 || mouseY < -1) {
    return;
  }
  if (currentBoard[pointer.x][pointer.y] === 0) {
    fill(modeColor.box0Color)
  } else {
    fill(modeColor.box1Color)
  }
  rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
}

// touchEvent
function touchStarted() {
  pointer.x = Math.floor(mouseX / unitLength)
  pointer.y = Math.floor(mouseY / unitLength)
  if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
    return;
  }
  if (mouseX < -1 || mouseY < -1) {
    return;
  }
  if (currentBoard[pointer.x][pointer.y] === 0) {
    currentBoard[pointer.x][pointer.y] = 1
    fill(modeColor.box1Color)
    stroke(modeColor.strokeColor)
    rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
  } else {
    currentBoard[pointer.x][pointer.y] = 0
    fill(modeColor.box1Color)
    rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
  }
  blocked()
  noLoop()
  return false;
}
function touchMoved() {
  if(pointer.x < 0) {
    ''
  } else {
    prePointer.x = pointer.x
  }
  if(pointer.y < 0) {
    ''
  } else {
    prePointer.y = pointer.y
  }
  /**
   * If the mouse coordinate is outside the board
  */
  pointer.x = Math.floor(mouseX / unitLength);
  pointer.y = Math.floor(mouseY / unitLength);
  if (pointer.x !== prePointer.x || pointer.y !== prePointer.y) {
    if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
        return;
    }
    if (mouseX < -1 || mouseY < -1) {
        return;
    }
    if (currentBoard[pointer.x][pointer.y] === 0) {
      currentBoard[pointer.x][pointer.y] = 1
      fill(modeColor.box1Color)
      stroke(modeColor.strokeColor)
      rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
    } else {
      currentBoard[pointer.x][pointer.y] = 0
      fill(modeColor.box0Color)
      rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
    }
  } else {
  }
  blocked()
  return false;
}
function touchEnded() {
  stroke(modeColor.strokeColor)
  if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
    return;
  }
  if (mouseX < -1 || mouseY < -1) {
    return;
  }
  if (currentBoard[pointer.x][pointer.y] === 0) {
    fill(modeColor.box0Color)
  } else {
    fill(modeColor.box1Color)
  }
  rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
  return false;
}

// keyboardEvent
function keyPressed() {
  if(pointer.x < 0) {
    ''
  } else {
    prePointer.x = pointer.x
  }
  if(pointer.y < 0) {
    ''
  } else {
    prePointer.y = pointer.y
  }
  
  if (keyCode === RIGHT_ARROW) {
    if (pointer.x === (floor(width / unitLength)-1)) {
      pointer.x = floor(width / unitLength) -1
    } else {
      pointer.x++
    }
  } else if (keyCode === LEFT_ARROW) {
    if (pointer.x < 1) {
      pointer.x = 0
    } else {
      pointer.x--
    }
  } else if (keyCode === DOWN_ARROW) {
    if (pointer.y === (floor(height / unitLength) - 1)) {
      pointer.y = floor(height / unitLength) - 1
    } else {
      pointer.y++
    }
  } else if (keyCode === UP_ARROW) {
    if (pointer.y < 1) {
      pointer.y = 0
    } else {
      pointer.y--
    }
    // press enter and spacebar
  } else if (keyCode === ENTER || keyCode === 32) {
    if (currentBoard[pointer.x][pointer.y] === 0) {
      fill(modeColor.box1Color)
      rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
      currentBoard[pointer.x][pointer.y] = 1
      noFill()
    } else {
      fill(modeColor.box0Color)
      rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
      currentBoard[pointer.x][pointer.y] = 0
      noFill()
    }
  }
  // strokeWeight(4)
  blocked()
}
function keyReleased() {
  stroke(modeColor.strokeColor)
  if (currentBoard[pointer.x][pointer.y] === 0) {
    fill(modeColor.box0Color)
  } else {
    fill(modeColor.box1Color)
  }
  rect(pointer.x * unitLength, pointer.y * unitLength, unitLength, unitLength)
}

// highlight current Block
function blocked() {
  if (currentBoard[pointer.x][pointer.y] === 0) {
    fill(modeColor.box0Color)
  } else {
    fill(modeColor.box1Color)
  }
  stroke(modeColor.selectStrokeColor)
  rect(pointer.x * unitLength +2.5, pointer.y * unitLength +2.5, unitLength -5, unitLength -5)

  if (prePointer.x !== pointer.x || prePointer.y !== pointer.y ) {
    if (currentBoard[prePointer.x][prePointer.y] === 0) {
      fill(modeColor.box0Color)
      rect(prePointer.x * unitLength, prePointer.y * unitLength, unitLength, unitLength)
    } else {
      fill(modeColor.box1Color)
      rect(prePointer.x * unitLength, prePointer.y * unitLength, unitLength, unitLength)
    }
    stroke(modeColor.strokeColor)
    rect(prePointer.x * unitLength, prePointer.y * unitLength, unitLength, unitLength)
    noFill()
    noStroke()
  }
}

document.querySelector('#resetZero').addEventListener('click', function() {
  if (start === true) {
    startStopBtn()
  }
  initZero()
  redraw()
});

function changeStartBtn () {
  if(start){
    startbtn.textContent = 'START'
    noLoop()
  } else {
    startbtn.textContent = 'STOP'
    frameNo++
    loop()
  }
}

// screenSize Controller
function windowResized() {
  if(scrSize === "small") {
    resizeCanvas(unitLength * floor(((windowWidth - 100)/2)/unitLength), unitLength * floor(((windowHeight - 200)/2)/unitLength))
  } else if (scrSize === "middle") {
    resizeCanvas(unitLength * floor((windowWidth - 100)/1.5/unitLength), unitLength * floor((windowHeight - 200)/1.5/unitLength))
  } else if (scrSize === "large") {
    resizeCanvas(unitLength * floor((windowWidth - 100)/unitLength), unitLength * floor((windowHeight - 200)/unitLength))
  } else {
    return
  }
}
document.querySelector('#small').addEventListener('click',function windowResized() {
  resizeCanvas(unitLength * floor(((windowWidth - 100)/2)/unitLength), unitLength * floor(((windowHeight - 200)/2)/unitLength))
  scrSize = "small"
})
document.querySelector('#middle').addEventListener('click',function windowResized() {
  resizeCanvas(unitLength * floor((windowWidth - 100)/1.5/unitLength), unitLength * floor((windowHeight - 200)/1.5/unitLength))
  scrSize = "middle"
})
document.querySelector('#large').addEventListener('click',function windowResized() {
  resizeCanvas(unitLength * floor((windowWidth - 100)/unitLength), unitLength * floor((windowHeight - 200)/unitLength))
  scrSize = "large"
})

// pattern of Game of Life
function initRandomState() {
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			currentBoard[i][j] = (Math.random()) > 0.9?1:0;
			nextBoard[i][j] = 0;
      staticStatus[i + '' + j] = 0
		}
	}
}
function initZero() {
  frameNo = 0
  countBorn = 0
  countDie = 0
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			currentBoard[i][j] = 0;
			nextBoard[i][j] = 0
      staticStatus[i + '' + j] = 0
		}
	}
}
function initgGG() {
  currentBoard[0][4] = 1
  currentBoard[0][5] = 1
  currentBoard[1][4] = 1
  currentBoard[1][5] = 1
  currentBoard[10][4] = 1
  currentBoard[10][5] = 1
  currentBoard[10][6] = 1
  currentBoard[11][3] = 1
  currentBoard[11][7] = 1
  currentBoard[12][2] = 1
  currentBoard[12][8] = 1
  currentBoard[13][2] = 1
  currentBoard[13][8] = 1
  currentBoard[14][5] = 1
  currentBoard[15][3] = 1
  currentBoard[15][7] = 1
  currentBoard[16][4] = 1
  currentBoard[16][5] = 1
  currentBoard[16][6] = 1
  currentBoard[17][5] = 1
  currentBoard[20][2] = 1
  currentBoard[20][3] = 1
  currentBoard[20][4] = 1
  currentBoard[21][2] = 1
  currentBoard[21][3] = 1
  currentBoard[21][4] = 1
  currentBoard[22][1] = 1
  currentBoard[22][5] = 1
  currentBoard[24][0] = 1
  currentBoard[24][1] = 1
  currentBoard[24][5] = 1
  currentBoard[24][6] = 1
  currentBoard[34][2] = 1
  currentBoard[34][3] = 1
  currentBoard[35][2] = 1
  currentBoard[35][3] = 1
}
function initG() {
  currentBoard[3][6] = 1
  currentBoard[4][4] = 1
  currentBoard[4][6] = 1
  currentBoard[5][5] = 1
  currentBoard[5][6] = 1
}
function initlSS() {
  currentBoard[4][6] = 1
  currentBoard[4][7] = 1
  currentBoard[4][8] = 1
  currentBoard[5][5] = 1
  currentBoard[5][8] = 1
  currentBoard[6][8] = 1
  currentBoard[7][8] = 1
  currentBoard[8][5] = 1
  currentBoard[8][7] = 1
}
function initcSS() {
  currentBoard[3][4] = 1
  currentBoard[3][5] = 1
  currentBoard[3][7] = 1
  currentBoard[4][1] = 1
  currentBoard[4][8] = 1
  currentBoard[5][1] = 1
  currentBoard[5][4] = 1
  currentBoard[5][8] = 1
  currentBoard[5][9] = 1
  currentBoard[6][2] = 1
  currentBoard[6][3] = 1
  currentBoard[6][9] = 1
  currentBoard[6][11] = 1
  currentBoard[6][12] = 1
  currentBoard[7][2] = 1
  currentBoard[7][3] = 1
  currentBoard[7][9] = 1
  currentBoard[7][11] = 1
  currentBoard[7][12] = 1
  currentBoard[8][1] = 1
  currentBoard[8][4] = 1
  currentBoard[8][8] = 1
  currentBoard[8][9] = 1
  currentBoard[9][1] = 1
  currentBoard[9][8] = 1
  currentBoard[10][4] = 1
  currentBoard[10][5] = 1
  currentBoard[10][7] = 1
}
// Control
let pattern = document.querySelector('#patternSelect')
document.querySelector('#goBtn').addEventListener('click', () => {
  if (start === true) {
    startStopBtn()
  }
  initZero()
  if (pattern.value === 'random') {
    initRandomState()
  } else if (pattern.value === 'glider') {
    initG()
  } else if (pattern.value === 'lightweightSpaceShip') {
    initlSS()
  } else if (pattern.value === 'copperheadSpaceship') {
    initcSS()
  } else if (pattern.value === 'gosperGliderGun') {
    initgGG()
  }
  redraw()
})

let noBoundary = false
document.querySelector('#noBound').addEventListener('click', () => {
  noBoundary = !noBoundary
  if (start === true) {
    loop()
  } else {
    noLoop()
  }
})

let yourName = ''
document.querySelector('#getYrName').addEventListener('click', () => {
  yourName = document.querySelector('#yourName').value
  if (yourName !== '') {
    yourName = "Hello, "+ yourName
  } else {
    yourName = "Hello, Visitor"
  }
  document.querySelector('#playerName').innerText = yourName
  document.querySelector('#landingPage').classList.add('visually-hidden')
  document.querySelector('#gameArea').classList.remove('visually-hidden')
})

// rule controller
document.querySelector('#saveBtn').addEventListener('click',()=>{
  if(Number(document.querySelector('#surNeiLess').value) > Number(document.querySelector('#surNeiMore').value)) {
    document.querySelector('#surNeiLess').value = 2
    alert("A can not be greater than B")
  } else {
    condition.surNeiLess = Number(document.querySelector('#surNeiLess').value)
    condition.surNeiMore = Number(document.querySelector('#surNeiMore').value)
    condition.surCurrent = Number(document.querySelector('#surCur').value)
    condition.repNei = Number(document.querySelector('#repNei').value)
    condition.repCurrent = Number(document.querySelector('#repCur').value)
  }
})

// mode controller
document.querySelector('#viewMode').addEventListener('click',() => {
  if (start === true) {
    startStopBtn()
  }
  if(modeColor.dark) {
    modeColor = {
      dark:false,
      backgroundColor:'black',
      fontColor:'white',
      box0Color:'black',
      box1Color:'lightblue',
      box2Color:'blue',
      box3Color:'darkblue',
      blkBgColor:'black',
      strokeColor:'white',
      selectStrokeColor:'darkyellow',
      stableColor:'darkgrey'
    }
    document.querySelector('body').classList.add('lightMode')

    document.querySelectorAll('button').forEach(btn => btn.classList.remove('btn-primary'))
    document.querySelectorAll('button').forEach(btn => btn.classList.add('btn-warning'))
    // document.querySelector('#startBtn').classList.remove('btn-primary')
    // document.querySelector('#startBtn').classList.add('btn-light') 
  } else {
    modeColor = {
      dark:true,
      backgroundColor:'black',
      fontColor:'white',
      box0Color:'white',
      box1Color:'lightgreen',
      box2Color:'green',
      box3Color:'darkgreen',
      blkBgColor:'white',
      strokeColor:'black',
      selectStrokeColor:'blue',
      stableColor:'black'
    }
    document.querySelector('body').classList.remove('lightMode')
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('btn-warning'))
    document.querySelectorAll('button').forEach(btn => btn.classList.add('btn-primary'))
    // document.querySelector('#startBtn').classList.remove('btn-light')
    // document.querySelector('#startBtn').classList.add('btn-primary')
  }
  redraw()
})


