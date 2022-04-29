// taking elements into vatiables
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    // removing mole if it already exist, it checks every square
    square.classList.remove('mole');
  });

  // picking random square. It generates random number between 1-9
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  // adding mole to random square
  randomSquare.classList.add('mole');

  hitPosition = randomSquare.id;
  //console.log(hitPosition);
}
//checking if player click the mole
squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    result++;
    score.textContent = result;
    hitPosition = null;
  });
});

// creating functio for mole to move between squares
function moveMole() {
  // call randomSquare function every 500ms
  timerId = setInterval(randomSquare, 500);
}

moveMole();

// setting timer for 60s
function countDown() {
  currentTime--;
  // printing how much time is left
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('Game over! your final score is ' + result);
  }
}

console.log(currentTime);
//it calls countDown function once per second
let countDownTimerId = setInterval(countDown, 1000);

//document.getElementById('restartBtn').addEventListener('click', restarGame);
