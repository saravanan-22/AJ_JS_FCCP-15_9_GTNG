let guessInput = document.getElementById("guess-input");
let checkButton = document.getElementById("check-button");
let resultElement = document.getElementById("result");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    resultElement.textContent = "Invalid input. Please enter a number.";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    resultElement.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
    guessInput.disabled = true;
    checkButton.disabled = true;
  } else if (guess < randomNumber) {
    resultElement.textContent = "Too low. Try again.";
  } else {
    resultElement.textContent = "Too high. Try again.";
  }

  guessInput.value = "";
  guessInput.focus();
}

checkButton.addEventListener("click", checkGuess);



// let guessInput = document.getElementById("guess-input");
// This line retrieves an HTML input element with the ID "guess-input" and assigns it to the variable guessInput. 
// This element is where the user will input their guess.

// let checkButton = document.getElementById("check-button");
// This line retrieves an HTML button element with the ID "check-button" and assigns it to the variable checkButton. 
// This button is used to submit the user's guess for checking.

// let resultElement = document.getElementById("result");
// Similarly, this line retrieves an HTML element with the ID "result" and assigns it to the variable resultElement.
// / This element is where the game's results and messages will be displayed.

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// This line generates a random number between 1 and 100 (inclusive) and assigns it to the variable randomNumber.
//  This is the number that the user needs to guess.

// let attempts = 0;
// This initializes the variable attempts to keep track of how many guesses the user has made.

// function checkGuess() { ... }
// This function is called when the user clicks the "Check" button.
//  It retrieves the user's guess from the guessInput element, converts it to an integer using parseInt(), and stores it in the variable guess.

// The function then checks if the guess is not a valid number using isNaN().
//  If it's not a valid number, it displays an error message in the resultElement and returns early.
// The attempts counter is incremented for each guess.
// If the guess matches the randomNumber, it displays a congratulatory message along with the number of attempts taken to guess correctly. It also disables the input field and the "Check" button to prevent further guesses.
// If the guess is too low or too high compared to randomNumber, it provides a corresponding hint message.
// After displaying the result or error message, the input field is cleared, focused, and ready for the next guess.

// checkButton.addEventListener("click", checkGuess);
// This adds an event listener to the "Check" button. 
// /When the button is clicked, it calls the checkGuess() function to process the user's guess and display the result.