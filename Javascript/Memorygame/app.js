const cardArray = [
  {
    name: 'cat',
    img: 'images/cat.jpg',
  },
  {
    name: 'dog',
    img: 'images/dog.jpg',
  },
  {
    name: 'fox',
    img: 'images/fox.jpg',
  },
  {
    name: 'frog',
    img: 'images/frog.jpg',
  },
  {
    name: 'owl',
    img: 'images/owl.jpg',
  },
  {
    name: 'rat',
    img: 'images/rat.jpg',
  },
  {
    name: 'cat',
    img: 'images/cat.jpg',
  },
  {
    name: 'dog',
    img: 'images/dog.jpg',
  },
  {
    name: 'fox',
    img: 'images/fox.jpg',
  },
  {
    name: 'frog',
    img: 'images/frog.jpg',
  },
  {
    name: 'owl',
    img: 'images/owl.jpg',
  },
  {
    name: 'rat',
    img: 'images/rat.jpg',
  },
  {
    name: 'giraffe',
    img: 'images/giraffe.jpg',
  },
  {
    name: 'giraffe',
    img: 'images/giraffe.jpg',
  },
];
// how to sort array randomly
cardArray.sort(() => 0.5 - Math.random());

// checking if sortig works
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

//creating variable for chosen cards
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.jpg');
    card.setAttribute('data-id', i);
    // testing
    //console.log('card, i');

    //adding eventlistener(click) to every card
    card.addEventListener('click', flipCard);
    //adding blank cards to div
    gridDisplay.appendChild(card);
  }
}
createBoard();

//function to check if two cards are the same
function checkMatch() {
  // look for all the cards
  const cards = document.querySelectorAll(' #grid img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log(cards);
  console.log('check for match!');
  //   checking if cards is clicked two times in a row
  if (optionOneId == optionTwoId) {
    alert('you have clicked the same card!');
    cards[optionOneId].setAttribute('src', 'images/blank.jpg');
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    //   check if cards 1 and 2 are the same
    alert('you found a match');
    // removing matching cards
    cards[optionOneId].setAttribute('src', 'images/white.jpg');
    cards[optionTwoId].setAttribute('src', 'images/white.jpg');
    // removing eventlistener for those cards
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);

    // adding cards to cardsWon array
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.jpg');
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    // alert('sorry, try again');
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  // checking when all the pairs are found
  if (cardsWon === cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations you found them all!';
  }
}

function flipCard() {
  //console.log(cardArray);
  // storing clicked card id to variable
  const cardId = this.getAttribute('data-id');

  //console.log('clicked', cardId);
  //console.log(cardArray[cardId].name);
  //adding card to array cardsChosen and cardsChosenIds
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosenIds);
  console.log(cardsChosen);
  //adding image when flipping card
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
