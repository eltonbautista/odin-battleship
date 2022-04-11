/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { Gameboard } from './factory-function-gameboard';
import { Player } from './factory-function-player';
import { renderGrid } from '../UI-logic/render-grid';
import { gridMouseEvents } from '../UI-logic/grid-event-listener';

export const gameFlow = function gameFlow() {
  const playerGrid = renderGrid(100, 'player');
  const computerGrid = renderGrid(100, 'computer');

  const playerGameboard = Gameboard();
  const computerGameboard = Gameboard();

  //   const playerCellsArray = document.querySelectorAll('.player.cell');
  //   const computerCellsArray = document.querySelectorAll('.computer.cell');

  gridMouseEvents(computerGrid, computerGameboard);
};
