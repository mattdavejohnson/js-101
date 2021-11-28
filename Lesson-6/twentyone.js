// Create the game Twenty-One, a stripped down version of Blackjack

const readline = require('readline-sync');

const STAND = ['s', 'S', 'stand', 'Stand'];
const HIT = ['h', 'H', 'hit', 'Hit'];
const CONTINUE_PLAYING = ['n', 'N', 'no', 'No', 'y', 'Y', 'yes', 'Yes'];
const BLACKJACK = 21;
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

function displayHand(playerHand, dealerHand) {
  console.clear();
  console.log('Dealers current hand:');
  console.log('---------------------');
  console.log(`${dealerHand[0][1]} of ${dealerHand[0][0]}`);
  console.log('Facedown card');

  console.log('');
  console.log('Your current hand:');
  console.log('---------------------');
  playerHand.forEach((card) => {
    console.log(`${card[1]} of ${card[0]}`);
  });
  console.log(`Total: ${calculateHand(playerHand)}`);
}

function calculateHand(hand) {
  let values = hand.map((card) => card[1]);

  let total = 0;
  values.forEach((value) => {
    if (value === 'A') {
      total += 11;
    } else if (FACE_CARDS.includes(value)) {
      total += 10;
    } else {
      total += Number(value);
    }
  });

  values
    .filter((value) => value === 'A')
    .forEach(() => {
      if (total > 21) total -= 10;
    });

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

function busted(hand) {
  let total = calculateHand(hand);
  if (total > BLACKJACK) {
    return true;
  } else {
    return false;
  }
}

function playerTurn(deck, playerHand, dealerHand) {
  displayHand(playerHand, dealerHand);

  while (calculateHand(playerHand) < BLACKJACK) {
    let answer = hitOrStand();
    if (answer === 'stand') {
      console.log('You choose to stand.');
      break;
    } else if (answer === 'hit') {
      playerHand[playerHand.length] = deck.pop();
    }

    displayHand(playerHand, dealerHand);
  }
}

function dealerTurn(deck, playerHand, dealerHand) {
  if (calculateHand(playerHand) === BLACKJACK || busted(playerHand)) {
    return;
  }

  while (true) {
    if (calculateHand(dealerHand) >= 17) {
      break;
    } else {
      dealerHand[dealerHand.length] = deck.pop();
    }
  }
}

function displayFinalHand(playerHand, dealerHand) {
  console.clear();
  console.log('Dealers final hand:');
  console.log('---------------------');
  dealerHand.forEach((card) => {
    console.log(`${card[1]} of ${card[0]}`);
  });

  console.log('');
  console.log('Your final hand:');
  console.log('---------------------');
  playerHand.forEach((card) => {
    console.log(`${card[1]} of ${card[0]}`);
  });
  console.log('');
}

function displayWinner(playerHand, dealerHand) {
  console.log('Final Score:');
  console.log('---------------------');
  console.log(`Dealer: ${calculateHand(dealerHand)}`);
  console.log(`Player: ${calculateHand(playerHand)}`);
  console.log('');

  if (busted(dealerHand)) {
    console.log('Dealer busted. You win!');
  } else if (busted(playerHand)) {
    console.log('You busted. Dealer wins.');
  } else if (calculateHand(playerHand) === BLACKJACK) {
    console.log('You got blackjack! You win!');
  } else if (calculateHand(playerHand) > calculateHand(dealerHand)) {
    console.log('You win!');
  } else if (calculateHand(playerHand) < calculateHand(dealerHand)) {
    console.log('Dealer wins.');
  } else {
    console.log('You tied.');
  }
}

function playAgain() {
  let answer;
  while (true) {
    console.log("Play again? ('y' or 'n')");
    answer = readline.question();

    if (CONTINUE_PLAYING.includes(answer)) break;

    console.log("Sorry, that's not a valid response.");
  }

  if (answer === 'n' || answer === 'N' || answer === 'no' || answer === 'No') {
    return false;
  }

  return true;
}

while (true) {
  let deck = initializeDeck();
  shuffle(deck);

  let playerHand = initializeHand(deck);
  let dealerHand = initializeHand(deck);

  playerTurn(deck, playerHand, dealerHand);
  dealerTurn(deck, playerHand, dealerHand);

  displayFinalHand(playerHand, dealerHand);
  displayWinner(playerHand, dealerHand);

  if (!playAgain()) {
    console.log('Thank you for playing Twenty-One!');
    break;
  }
}
