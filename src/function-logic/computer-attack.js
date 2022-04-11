/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

// A module function used to attack the human player's board.
// It takes three parameters, and changes the background color of the attacked cell.
export const computerAttack = function computerAttack(
  gameboard,
  uniqueRandomNumber,
  playerboardArray
) {
  const randomNum = uniqueRandomNumber();
  console.log(randomNum);
  gameboard.receiveAttack(randomNum);
  playerboardArray[randomNum].style.background = 'rgb(250, 0, 0)';
};
