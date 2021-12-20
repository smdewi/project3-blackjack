//Blackjack game
//Start game

//Create a deck of card
var makeDeck = function () {
  var cardDeck = [];
  var suits = ["diamonds", "hearts", "clubs", "spades"];

  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    var rankCounter = 1;
    // Loop from 1 to 13 to create all cards for each suit
    while (rankCounter <= 13) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, rank and value
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      // Add the new card to the deck
      cardDeck.push(card);

      // Increment rankCounter to iterate over the next rank
      rankCounter += 1;
    }

    // Increment the suit index to iterate over the next suit
    suitIndex += 1;
  }

  // Return the completed card deck
  return cardDeck;
};

//Shuffle the deck
//Deal cards to player and dealer
//Give player option to hit or stand
//Calculate score
//Determine who wins

var main = function (input) {
  var myOutputValue = "hello world";

  var newDeck = makeDeck();
  console.log(newDeck);

  if (input == "hit") {
    myOutputValue = "The Hit Button has been clicked.";
  } else if (input == "stand") {
    myOutputValue = "Stand button has been selected";
  } else if (input == "reset") {
    myOutputValue = "Reset The Game";
  }
  return myOutputValue;
};
