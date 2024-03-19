let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
const generateTarget = () => {
  return targetNumber = Math.floor(Math.random() * 10);
};
generateTarget();

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  let difference1 = Math.abs(humanGuess - targetNumber);
  let difference2 = Math.abs(computerGuess - targetNumber);

// Comparaison of guesses.
if(humanGuess = computerGuess) {
  return true;
} else if(difference1 < difference2) {
  return true;
} else {
  return false;
}
};

//Function to update score.
const updateScore = winner => {
 if(winner === 'human') {
  humanScore += 1;
 };
 if(winner === 'computer') {
  computerScore += 1;
 };
} 

const advanceRound = () => {
  currentRoundNumber += 1;
}