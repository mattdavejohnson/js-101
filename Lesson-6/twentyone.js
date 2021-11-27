// Create the game Twenty-One, a stripped down version of Blackjack

const readline = require('readline-sync');

const STAND = ['s', 'S', 'stand', 'Stand'];
const HIT = ['h', 'H', 'hit', 'Hit'];
const FACE_CARDS = ['J', 'Q', 'K'];
const SUITS = ['C', 'H', 'S', 'D'];
const VALUES = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

function initializeDeck() {
  let deckArray = [];

  for (let index = 0; index < SUITS.length; index++) {
    for (let indexTwo = 0; indexTwo < VALUES.length; indexTwo++) {
      deckArray.push([SUITS[index], VALUES[indexTwo]]);
    }
  }

  return deckArray;
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

function initializeHand(deck) {
  let hand = [];
  hand[0] = deck.pop();
  hand[1] = deck.pop();
  return hand;
}

function displayHand(hand) {
  console.log('Your current hand:');
  hand.forEach((card) => {
    console.log(`${card[1]} of ${card[0]}`);
  });
}

function calculateHand(hand) {
  let values = hand.map((card) => {
    if (FACE_CARDS.includes(card[1])) {
      return 10;
    } else if (card[1] === 'A') {
      return 11;
    } else {
      return Number(card[1]);
    }
  });

  let total = values.reduce((previous, current) => previous + current);
  return total;
}

function hitOrStand() {
  let answer;
  while (true) {
    console.log('Would you like to hit (h) or stand (s)?');
    answer = readline.question();

    if (STAND.includes(answer)) {
      return 'stand';
    }
    if (HIT.includes(answer)) {
      return 'hit';
    }

    console.log("Sorry, that's not a valid choice.");
  }
}

function playerTurn(deck, hand) {
  displayHand(hand);

  while (true) {
    let answer = hitOrStand();

    if (answer === 'stand') {
      console.log('You choose to stand.');
      break;
    }

    if (answer === 'hit') {
      hand[hand.length] = deck.pop();
    }

    displayHand(hand);
    console.log(`Total: ${calculateHand(hand)}`);
  }
}

let deck = initializeDeck();
shuffle(deck);

let playerHand = initializeHand(deck);
console.log(playerHand);

let dealerHand = initializeHand(deck);
console.log(dealerHand);

playerTurn(deck, playerHand);
