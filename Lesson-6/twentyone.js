// Create the game Twenty-One, a stripped down version of Blackjack

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

let deck = initializeDeck();
shuffle(deck);

let playerHand = initializeHand(deck);
console.log(playerHand);

let dealerHand = initializeHand(deck);
console.log(dealerHand);
