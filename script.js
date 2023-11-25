// Set an initial secret number
let secretNumber = generateRandomNumber();

function generateRandomNumber() {
  // Generate a random number between 1 and 100
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  // Get the user's guess
  const userGuess = document.getElementById("guessInput").value;

  // Check if the guess is correct
  if (userGuess == secretNumber) {
    document.getElementById("result").innerHTML = "Congratulations! You guessed the correct number!";
    
    // Change the secretNumber for the next round
    secretNumber = generateRandomNumber();
  } else if (userGuess < secretNumber) {
    document.getElementById("result").innerHTML = "Too low! Try again.";
  } else {
    document.getElementById("result").innerHTML = "Too high! Try again.";
  }
}
