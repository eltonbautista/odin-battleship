/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { Gameboard } from './factory-function-gameboard';
import { Player } from './factory-function-player';
import { renderGrid } from '../UI-logic/render-grid';

export const gameFlow = function gameFlow() {
  const humanPlayer = Player('human');
  const computerPlayer = Player('computer');

  const playerGameboard = Gameboard();
  const computerGameboard = Gameboard();

  const playerGrid = renderGrid(
    playerGameboard.gameboardArray.length,
    'player'
  );
  const computerGrid = renderGrid(
    computerGameboard.gameboardArray.length,
    'computer'
  );

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
    computerPlayer
  );
  computerGameboard.placeShip(computerGameboard.submarine, 0, 1, 2);
  computerGameboard.placeShip(computerGameboard.carrier, 3, 4, 5, 6, 7);
  computerGameboard.placeShip(computerGameboard.battleship, 8, 9, 10, 11);
  computerGameboard.placeShip(computerGameboard.patrolBoat, 12, 13);
  computerGameboard.placeShip(computerGameboard.destroyer, 14, 15, 16);
};
