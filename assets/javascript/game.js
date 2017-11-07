// Setting up Variables //

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessesLeft, guessedLetters, letterToGuess;

resetGame();
display();

// When User Guesses //
document.onkeyup = function() {
  var guess = event.key;
  if (guess === letterToGuess) {
    win();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
    // Add 
  }

  display();
}


// Display to HTML //
function display() {
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("loses");
  var guessLeft = document.getElementById("guessLeft");
  var letterGuessed = document.getElementById("guessed");
  winsP.innerHTML = wins;
  losesP.innerHTML = loses;
  guessLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(",");
}

// When User Wins //
function win() {
  wins++;
  resetGame();
}

// When User Loses //
function lost() {
  loses++;
  resetGame();
}

// When User Guesses Incorrectly //
function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}

// Reset Game //
function resetGame() {
  guessesLeft = 10;
  guessedLetters = [];
  letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log("Letter to guess: " + letterToGuess);
}

// User Can Only Enter Alaphabetic characters //
