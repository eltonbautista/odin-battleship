/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
import { computerAttack } from '../function-logic/computer-attack';

export const gridMouseEvents = function gridMouseEvents(
  grid,
  computerGameboard,
  playerGameboard,
  getUniqueRandom,
  playerCellsArray
) {
  //   const playerCellsArray = document.querySelectorAll('.player.cell');

  grid.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'rgb(250, 0, 50)';
    computerGameboard.receiveAttack(e.target.dataset.computer);
    setTimeout(
      computerAttack(playerGameboard, getUniqueRandom, playerCellsArray),
      5000
    );
  });
};
