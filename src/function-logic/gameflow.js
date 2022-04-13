/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { Gameboard } from './factory-function-gameboard';
import { Player } from './factory-function-player';
import { dragDropShip } from '../UI-logic/drag-drop-ship';
import { startMenu } from '../UI-logic/start-menu';

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
    computerCellsArray,
    computerPlayer
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
  // console.log(playerGameboard.gameboardArray);

  dragDropShip(
    startMenu,
    playerGameboard.placeShip,
    playerGameboard.gameboardArray,
    playerGameboard.myShips
  );

  // Test:
  // playerGameboard.placeShip(
  //   playerGameboard.gameboardArray,
  //   playerGameboard.submarine,
  //   0,
  //   1,
  //   2
  // );
  // playerGameboard.placeShip(
  //   playerGameboard.gameboardArray,
  //   playerGameboard.carrier,
  //   3,
  //   4,
  //   5,
  //   6,
  //   7
  // );
  // playerGameboard.placeShip(
  //   playerGameboard.gameboardArray,
  //   playerGameboard.battleship,
  //   8,
  //   9,
  //   10,
  //   11
  // );
  // playerGameboard.placeShip(
  //   playerGameboard.gameboardArray,
  //   playerGameboard.patrolBoat,
  //   12,
  //   13
  // );
  // playerGameboard.placeShip(
  //   playerGameboard.gameboardArray,
  //   playerGameboard.destroyer,
  //   14,
  //   15,
  //   16
  // );
};
