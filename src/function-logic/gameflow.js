/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { Gameboard } from './factory-function-gameboard';
import { Player } from './factory-function-player';
// import { dragDropShip } from '../UI-logic/drag-drop-ship';
// import { startMenu } from '../UI-logic/start-menu';

export const gameFlow = function gameFlow() {
  const humanPlayer = Player('human');
  const computerPlayer = Player('computer');

  const playerGameboard = Gameboard('player', gameFlow);
  const computerGameboard = Gameboard('computer', gameFlow);

  // eslint-disable-next-line no-unused-vars
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

  playerGameboard.playerPlaceShip(
    playerGameboard.beginGame,
    playerGameboard.placeShip,
    playerGameboard.gameboardArray,
    playerGameboard.myShips
  );

  computerPlayer.computerRandomShipPlacement(computerGameboard);
};
