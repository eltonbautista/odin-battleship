/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { coordinatesGenerator } from './coordinates-module-for-Player';

export const Player = function playerFactoryFunction(player) {
  // prettier-ignore
  const coordinatesArray = [];
  const numOfRandom = 100;

  // Okay so getUnique is going to be used to get a random number.
  // It also removes that random number from an array of 0-99 so that it can't be reused.
  const getUniqueRandom = function getUniqueRandomInt() {
    // eslint-disable-next-line wrap-iife

    if (!coordinatesArray.length) {
      for (let i = 0; i < numOfRandom; i += 1) {
        coordinatesArray.push(i);
      }
    }
    const randomIndex = Math.floor(Math.random() * coordinatesArray.length);
    const randomVal = coordinatesArray[randomIndex];

    coordinatesArray.splice(randomIndex, 1);
    return randomVal;
  };

  // A method used to attack the human player's board.
  // It takes three parameters, and changes the background color of the attacked cell.

  const computerAttack = function computerAttack(
    gameboard,
    uniqueRandomNumber,
    playerCellsArray
  ) {
    const randomNum = uniqueRandomNumber();
    // playerCellsArray[randomNum].style.background = 'rgb(250, 0, 0)';
    gameboard.receiveAttack(
      gameboard.gameboardArray,
      randomNum,
      playerCellsArray
    );
  };

  const gridMouseEvents = function gridMouseEvents(
    gridContainer,
    computerGameboard,
    playerGameboard,
    uniqueRandomMethod,
    playerCellsArray,
    computerCellsArray,
    computerPlayer
  ) {
    // Attack the computer board by clicking on it.
    // prettier-ignore
    gridContainer.addEventListener('click', (e) => {
      if (
        !e.target.classList.contains('cell--hit')
        && !e.target.classList.contains('cell--miss')
      ) {
        // e.target.style.backgroundColor = 'rgb(250, 0, 50)';
        computerGameboard.receiveAttack(
          computerGameboard.gameboardArray,
          e.target.dataset.computer,
          computerCellsArray
        );
        setTimeout(
          computerPlayer.computerAttack(
            playerGameboard,
            uniqueRandomMethod,
            playerCellsArray
          ),
          5000
        );
      }
    });
  };

  const computerRandomShipPlacement = coordinatesGenerator;

  return {
    player,
    getUniqueRandom,
    computerAttack,
    gridMouseEvents,
    computerRandomShipPlacement,
  };
};
