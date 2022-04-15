/* eslint-disable import/prefer-default-export */
// import { gameFlow } from '../function-logic/gameflow';

export const gameOver = function gameOver(player, gameFlow) {
  const body = document.querySelector('body');
  const mainContent = document.querySelector('#main-content');
  const startMenu = document.querySelector('#start-menu');
  mainContent.textContent = `${player} has lost!`;
  mainContent.style.backgroundColor = 'black';
  body.style.backgroundColor = 'black';
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Play Again';
  mainContent.append(resetButton);
  resetButton.addEventListener('click', (e) => {
    mainContent.style.backgroundColor = 'white';
    resetButton.remove();
    startMenu.style.visibility = 'visible';
    mainContent.textContent = '';
    gameFlow();
  });
};
