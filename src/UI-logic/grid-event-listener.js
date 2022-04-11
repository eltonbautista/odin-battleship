/* eslint-disable import/prefer-default-export */
import { Gameboard } from '../function-logic/factory-function-gameboard';

export const gridMouseEvents = function gridMouseEvents(grid, gameboard) {
  //   const playerCellsArray = document.querySelectorAll('.player.cell');
  grid.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'rgb(250, 0, 50)';
    // console.log(e.target.dataset.computer);
    gameboard.receiveAttack(e.target.dataset.computer);
  });
};
