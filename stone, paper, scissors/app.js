const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_SELECTION = ROCK;
let gameIsRunning = false;
const PLAYER_DRAW = "DRAW";
const PLAYER_WON = "PLAYER";
const COMPUTER_WON = "COMPUTER";

const getPlayerChoice = () => {
  const choice = prompt(`Choose ${ROCK}, ${PAPER} or ${SCISSOR}`).toUpperCase();
  if (choice !== ROCK && choice !== PAPER && choice !== SCISSOR) {
    console.log(`Invalid input, Selecting ${ROCK} for you.`);
    return;
  }
  return choice;
};

const getComputerChoice = () => {
  const choiceNum = Math.random();
  if (choiceNum < 0.34) {
    return ROCK;
  } else if (choiceNum < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_SELECTION) => {
  if (pChoice === cChoice) {
    return PLAYER_DRAW;
  } else if (
    (pChoice === ROCK && cChoice === SCISSOR) ||
    (pChoice === PAPER && cChoice === ROCK) ||
    (pChoice === SCISSOR && cChoice === PAPER)
  ) {
    return PLAYER_WON;
  } else {
    return COMPUTER_WON;
  }
};

const runGame = () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting ...");
  const playerChoice = getPlayerChoice();
  // console.log("Player Choice\t", playerChoice);
  const computerChoice = getComputerChoice();
  // console.log("Computer Choice\t", computerChoice);
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You choose ${
    playerChoice || DEFAULT_SELECTION
  }, computer choose ${computerChoice} so, you `;
  if (winner === PLAYER_DRAW) {
    message = message + "had a draw.";
  } else if (winner === PLAYER_WON) {
    message += "won.";
  } else {
    message += "lost.";
  }
  alert(message);
  gameIsRunning = false;
};

startGameBtn.addEventListener("click", runGame);
document.addEventListener("keypress", runGame);
