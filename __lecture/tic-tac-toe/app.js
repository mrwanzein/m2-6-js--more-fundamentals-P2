// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
const game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Game Settings
const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let COUNTER = 0; // track game progress
let winner;

// game starts with player 1
let currentPlayer = '1';
player1.classList.add('active');

const handleRestart = () => {
  location.reload();
};

const toggleRestartBtn = () => {
  restartBtn.disabled = false;
};

const win = () => {
  board.removeEventListener('click', handleClick);
  alert(`${winner} won!`);
  toggleRestartBtn();
};

const verifyWin = () => {
  //rows
  if((game[0] === 'X' && game[1] === 'X' && game[2] === 'X') || (game[0] === 'O' && game[1] === 'O' && game[2] === 'O')){
    winner = game[0];
    win();
  }
  if((game[3] === 'X' && game[4] === 'X' && game[5] === 'X') || (game[3] === 'O' && game[4] === 'O' && game[5] === 'O')){
    winner = game[3];
    win();
  }
  if((game[6] === 'X' && game[7] === 'X' && game[8] === 'X') || (game[6] === 'O' && game[7] === 'O' && game[8] === 'O')){
    winner = game[6];
    win();
  }

  //columns
  if((game[0] === 'X' && game[3] === 'X' && game[6] === 'X') || (game[0] === 'O' && game[3] === 'O' && game[6] === 'O')){
    winner = game[0];
    win();
  }
  if((game[1] === 'X' && game[4] === 'X' && game[7] === 'X') || (game[1] === 'O' && game[4] === 'O' && game[7] === 'O')){
    winner = game[1];
    win();
  }
  if((game[2] === 'X' && game[5] === 'X' && game[8] === 'X') || (game[2] === 'O' && game[5] === 'O' && game[8] === 'O')){
    winner = game[2];
    win();
  }

  //diagonals
  if((game[0] === 'X' && game[4] === 'X' && game[8] === 'X') || (game[0] === 'O' && game[4] === 'O' && game[8] === 'O')){
    winner = game[0];
    win();
  }
  if((game[2] === 'X' && game[4] === 'X' && game[6] === 'X') || (game[2] === 'O' && game[4] === 'O' && game[6] === 'O')){
    winner = game[2];
    win();
  }
};

const togglePlayer = () => {
  // use .active to show active player visually...
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;


  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;

    currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1';
    game[cellId] = icon;
    verifyWin();
    console.log(game);
  }
};

board.addEventListener('click', handleClick);
restartBtn.addEventListener('click', handleRestart);
