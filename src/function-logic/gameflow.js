/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { Gameboard } from './factory-function-gameboard';
import { Player } from './factory-function-player';

export const gameFlow = function gameFlow() {
  const humanPlayer = Player('human');
  const computerPlayer = Player('computer');

  const playerGameboard = Gameboard();
  const computerGameboard = Gameboard();

  const playerGrid = playerGameboard.renderGrid(100, 'player');
  const computerGrid = computerGameboard.renderGrid(100, 'computer');

  const playerCellsArray = document.querySelectorAll(
    '#main-content > div:first-child > div'
  );
  const computerCellsArray = document.querySelectorAll(
    '#main-content > div:last-child > div'
  );

  humanPlayer.gridMouseEvents(
    computerGrid,
    computerGameboard,
    playerGameboard,
    humanPlayer.getUniqueRandom,
    playerCellsArray,
    computerPlayer,
    computerGameboard.gameboardArray
  );
  computerGameboard.placeShip(
    computerGameboard.gameboardArray,
    computerGameboard.submarine,
    0,
    1,
    2
  );
  computerGameboard.placeShip(
    computerGameboard.gameboardArray,
    computerGameboard.carrier,
    3,
    4,
    5,
    6,
    7
  );
  computerGameboard.placeShip(
    computerGameboard.gameboardArray,
    computerGameboard.battleship,
    8,
    9,
    10,
    11
  );
  computerGameboard.placeShip(
    computerGameboard.gameboardArray,
    computerGameboard.patrolBoat,
    12,
    13
  );
  computerGameboard.placeShip(
    computerGameboard.gameboardArray,
    computerGameboard.destroyer,
    14,
    15,
    16
  );
  console.log(computerGameboard.gameboardArray);
};
