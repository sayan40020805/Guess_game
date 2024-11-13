 const randomNumber = Math.floor(Math.random() * 100) + 1;
 let attemptCount = 0;
 function checkGuess() {
     const userGuess = parseInt(document.getElementById('userGuess').value);
     const resultDisplay = document.getElementById('result');
     const attemptsDisplay = document.getElementById('attempts');
     attemptCount++;
     attemptsDisplay.textContent = `Attempts: ${attemptCount}`;
     if (isNaN(userGuess)) {
         resultDisplay.textContent = "Please enter a valid number!";
         return;
     }
     if (userGuess < randomNumber) {
         resultDisplay.textContent = "Too low! Try again.";
     } else if (userGuess > randomNumber) {
         resultDisplay.textContent = "Too high! Try again.";
     } else {
         resultDisplay.textContent = `Congratulations! You guessed it right in ${attemptCount} attempts!`;
     }
 }