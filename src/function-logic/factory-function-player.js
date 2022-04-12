/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

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
    playerCellsArray[randomNum].style.background = 'rgb(250, 0, 0)';
    gameboard.receiveAttack(gameboard.gameboardArray, randomNum);
  };

  const gridMouseEvents = function gridMouseEvents(
    gridContainer,
    computerGameboard,
    playerGameboard,
    getUniqueRandom,
    playerCellsArray,
    computerPlayer,
    computerGameboardArray
  ) {
    //   const playerCellsArray = document.querySelectorAll('.player.cell');

    gridContainer.addEventListener('click', (e) => {
      if (e.target.style.backgroundColor !== 'rgb(250, 0, 50)') {
        console.log(e.target.style.backgroundColor);
        e.target.style.backgroundColor = 'rgb(250, 0, 50)';
        computerGameboard.receiveAttack(
          computerGameboardArray,
          e.target.dataset.computer
        );
        setTimeout(
          computerPlayer.computerAttack(
            playerGameboard,
            getUniqueRandom,
            playerCellsArray
          ),
          5000
        );
      }

      // console.log(computerGameboard);
    });
  };

  return {
    player,
    getUniqueRandom,
    computerAttack,
    gridMouseEvents,
  };
};
