// Model/data
let start = false
let countDie = 0
let countBorn = 0
const startStopBtn = () => {
  changeStartBtn()
    start = !start
}
const startbtn = document.querySelector('#startBtn')

startbtn.textContent = 'START'

const unitLength  = 50;
const boxColor    = 150;
const strokeColor = 50;
let slider
let blueColor
let yellowColor
let columns; /* To be determined by window width */
let rows;    /* To be determined by window height */
let currentBoard;
let nextBoard;
let speed = document.querySelector('#controlSpeed')
let speedValue =document.querySelector('[for="controlSpeed"]')
speedValue.textContent = speed.value
speed.addEventListener('input',(e) => {
  speedValue.textContent = e.target.value
})
let fr = speed.value


let keyX = 0
let keyY = 0
let kbCursor

function setup(){
  textSize(30);
  textAlign(CENTER);
  slider = createSlider(0.5,10,2,speedValue.textContent)
  slider.position(50,50)
  slider.style('width','100px')
	/* Set the canvas to be under the element #canvas*/
	const canvas = createCanvas(windowWidth - 100, windowHeight - 200);
	canvas.parent(document.querySelector('#canvas'));

  frameRate(fr)
	/*Calculate the number of columns and rows */
	columns = floor(width  / unitLength);
	rows    = floor(height / unitLength);
	
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
  noLoop()
}


// control initial -state
function initRandomState() {
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			currentBoard[i][j] = (Math.random()) > 0.9?1:0;
			nextBoard[i][j] = 0;
      staticStatus[i + '' + j] = 0
		}
	}
}


function draw() {
  console.log('draw')
  text(frameCount, width / 2, height / 2);

  if(speed.value > 10) {
    console.log('test')
  }
  let fr = slider.value()
  frameRate(fr)
  blueColor = color(0,0,255)
    background(255);
    if(start) {
      generate();
    }
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (currentBoard[i][j] === 1){
                fill(boxColor);  
            } else if (currentBoard[i][j] === 2) {
                fill(100)
            } else if (currentBoard[i][j] === 3) {
              fill(000)
            } else {
                fill(255);
            }
            if (staticStatus[i+''+j] > 3 && currentBoard[i][j] >= 1) {
              fill(blueColor)
            }
            stroke(strokeColor);
            rect(i * unitLength, j * unitLength, unitLength, unitLength);
        }
    }
  }

function generate() {
  //Loop over every single box on the board
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      // Count all living members in the Moore neighborhood(8 boxes surrounding)
      let neighbors = 0;
      for (let i of [-1, 0, 1]) {
        for (let j of [-1, 0, 1]) {
          if( i == 0 && j == 0 ){
          // the cell itself is not its own neighbor
          continue;
          }
        // The modulo operator is crucial for wrapping on the edge
          neighbors += (currentBoard[(x + i + columns) % columns][(y + j + rows) % rows] > 0)?1:0;
        }
      }

      // Rules of Life
      if (currentBoard[x][y] >= 1 && neighbors < 2) {
        // Die of Loneliness
        nextBoard[x][y] = 0;
        staticStatus[x + '' + y] = 0
        countDie = countDie + 1;
        //   console.log('Die',countDie);
      } else if (currentBoard[x][y] >= 1 && neighbors > 3) {
        // Die of Overpopulation
        nextBoard[x][y] = 0;
        staticStatus[x + '' + y] = 0
        countDie = countDie + 1;
        //   console.log('Die',countDie);
      } else if (currentBoard[x][y] >= 1 && (neighbors == 2 || neighbors == 3)) {
        // Die of Overpopulation
        nextBoard[x][y] = neighbors;
        if (nextBoard[x][y] === currentBoard[x][y]) {
          staticStatus[x + '' + y]++
        } else {
          staticStatus[x + '' + y] = 0
        }
        
      } else if (currentBoard[x][y] == 0 && neighbors == 3) {
        // New life due to Reproduction
        nextBoard[x][y] = 1;
        staticStatus[x + '' + y] = 0
        countBorn = countBorn + 1;
        //   console.log('Born',countBorn);
      } else {
        // Static
        nextBoard[x][y] = currentBoard[x][y];
        if (currentBoard[x][y] > 0) {
          staticStatus[x + '' + y]++
        }
      }
    }
  }
  //   document.querySelector('#born').innerHTML = countBorn
  //   document.querySelector('#die').innerHTML = countDie
  // Swap the nextBoard to be the current Board
  [currentBoard, nextBoard] = [nextBoard, currentBoard];
}
/**
 * When mouse is dragged
 */
function mouseDragged() {
  /**
   * If the mouse coordinate is outside the board
   */
  if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
      return;
  }
  const x = Math.floor(mouseX / unitLength);
  const y = Math.floor(mouseY / unitLength);
  currentBoard[x][y] = 1;
  fill(boxColor);
  stroke(strokeColor);
  rect(x * unitLength, y * unitLength, unitLength, unitLength);
}

/**
* When mouse is pressed
*/
function mousePressed() {
  noLoop();
  mouseDragged();
}

// function mouseReleased() {
//   loop();
// }

document.querySelector('#reset-game').addEventListener('click', function() {
  initRandomState();
  redraw()
});
document.querySelector('#resetZero').addEventListener('click', function() {
		initZero();
    redraw()
});

function changeStartBtn () {
    if(start){
        startbtn.textContent = 'START'
        noLoop()
    } else {
        startbtn.textContent = 'STOP'
        loop()
    }
}

function keyPressed() {
  yellowColor = color(255,0,0)
  console.log(floor(width / unitLength),floor(height / unitLength))
  x = floor(width);
  y = floor(height);
  print(key, ' ', keyCode,' ',keyX,keyY)
  if (keyCode === RIGHT_ARROW) {
    if (keyX === (floor(width / unitLength)-1)) {
      keyX = floor(width / unitLength) -1
    } else {
      keyX++
    }
  } else if (keyCode === LEFT_ARROW) {
    if (keyX < 1) {
      keyX = 0
    } else {
      keyX--
    }
  } else if (keyCode === DOWN_ARROW) {
    if (keyY === (floor(height / unitLength) - 1)) {
      keyY = floor(height / unitLength) - 1
    } else {
      keyY++
    }
  } else if (keyCode === UP_ARROW) {
    if (keyY < 1) {
      keyY = 0
    } else {
      keyY--
    }
  } else if (keyCode === ENTER) {
    currentBoard[keyX][keyY]
  }
  kbCursor
  fill(yellowColor);
  rect(keyX * unitLength, keyY * unitLength, unitLength, unitLength)
}

document.querySelector('#small').addEventListener('click',function windowResized() {
  resizeCanvas((windowWidth - 100) / 2, (windowHeight - 200) / 2)
})
document.querySelector('#middle').addEventListener('click',function windowResized() {
  resizeCanvas((windowWidth - 100), (windowHeight - 200))
})
document.querySelector('#large').addEventListener('click',function windowResized() {
  resizeCanvas((windowWidth - 100) * 2, (windowHeight - 200) * 2)
})


document.querySelector('#gosperGliderGun').addEventListener('click',() => {
  initZero()
  initgGG()
  redraw()
})
document.querySelector('#glider').addEventListener('click',() => {
  initZero()
  initG()
  redraw()
})
document.querySelector('#lightweightSpaceShip').addEventListener('click',() => {
  initZero()
  initlSS()
  redraw()
})
document.querySelector('#copperheadSpaceship').addEventListener('click',() => {
  initZero()
  initcSS()
  redraw()
})
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


