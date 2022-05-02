// looking for class name grid
const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;

// defining user's start position
const userStart = [230, 10];
let currentPosition = userStart;

// defining ball's start position
const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

//create Block
class Block {
  //  defining block's corners
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}
// all the blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
  // //   lower blocks
  //   new Block(10, 170),
  //   new Block(120, 170),
  //   new Block(230, 170),
  //   new Block(340, 170),
  //   new Block(450, 170),
  //   new Block(10, 140),
  //   new Block(120, 140),
  //   new Block(230, 140),
  //   new Block(340, 140),
  //   new Block(450, 140),
  //   new Block(10, 110),
  //   new Block(120, 110),
  //   new Block(230, 110),
  //   new Block(340, 110),
  //   new Block(450, 110),
];

console.log(blocks[0]);

//draw all the blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    // creating one block
    const block = document.createElement('div');
    // adding block to previously created div
    block.classList.add('block');
    block.style.left = blocks[i].bottomLeft[0] + 'px';
    block.style.bottom = blocks[i].bottomLeft[1] + 'px';
    // adding block element to grid
    grid.appendChild(block);
  }
}
addBlocks();

// adding user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
// adding element to grid
grid.appendChild(user);

// draw user
function drawUser() {
  user.style.left = currentPosition[0] + 'px';
  user.style.bottom = currentPosition[1] + 'px';
}

// draw the ball
function drawBall() {
  //   ball.style.left = ballCurrentPosition[0] + 'px';
  //   ball.style.bottom = ballCurrentPosition[1] + 'px';
  ball.style.left = ballCurrentPosition[0] + 'px';
  //   console.log((ball.style.Left = ballCurrentPosition[0] + 'px'));
  ball.style.bottom = ballCurrentPosition[1] + 'px';
  //   console.log((ball.style.bottom = ballCurrentPosition[1] + 'px'));
}

// move user
function moveUser(e) {
  switch (e.key) {
    case 'ArrowLeft':
      // checking if user is on the grid
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
        break;
      }
    case 'ArrowRight':
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10;
        drawUser();
        break;
      }
  }
}

// adding eventListener to listen if key is pressed down
document.addEventListener('keydown', moveUser);

// add ball
let ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);
