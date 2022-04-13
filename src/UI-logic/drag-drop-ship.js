/* eslint-disable wrap-iife */
/* eslint-disable radix */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
// import { startMenu } from './start-menu';

export const dragDropShip = function dragDropShip(startMenu) {
  const draggableShips = startMenu();
  // const dropGrid = document.querySelector('#player');
  const playerCellsArray = document.querySelectorAll(
    '#main-content > div:first-child > div'
  );
  const myPlayerCells = [...playerCellsArray];
  // eslint-disable-next-line no-restricted-syntax

  const makeDraggable = function makeDraggable() {
    for (const ship of draggableShips) {
      // eslint-disable-next-line no-loop-func
      ship.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', ship.id);
        console.log(e.dataTransfer.items);
      });
    }
  };
  makeDraggable();
  // Okay so basically the user will drag a ship onto one of the cells, but there needs to be enough
  // adjacent cells beside the cell it's dropped on, so that it will properly drop.

  const hideShip = function hideShip(droppedShip) {
    const droppedShipIndex = draggableShips.indexOf(droppedShip);
    const shipDroppedOnGrid = droppedShip;
    shipDroppedOnGrid.setAttribute('draggable', 'false');
    shipDroppedOnGrid.style.visibility = 'hidden';
    draggableShips.splice(droppedShipIndex, 1);
    console.log(draggableShips);
  };

  const colorDroppedArea = function colorDroppedArea(
    length,
    startCell,
    addClass,
    placeShip
  ) {
    for (let i = 0; i < length; i += 1) {
      myPlayerCells[myPlayerCells.indexOf(startCell) + i].classList.add(
        `${addClass}`
      );
      // placeShip(playerGrid, myShips[i], ...coordinates)
    }
  };

  const makeDroppable = function makeDroppable() {
    for (const cell of myPlayerCells) {
      cell.addEventListener('dragover', (e) => {
        e.preventDefault();
        cell.classList.add('player--over');
      });

      cell.addEventListener('dragleave', (e) => {
        cell.classList.remove('player--over');
      });

      cell.addEventListener('drop', (e) => {
        if (cell.classList.contains('player--dropped') === false) {
          e.preventDefault();
          cell.classList.remove('player--over');
          const shipId = e.dataTransfer.getData('text/plain');
          const droppedShip = document.getElementById(shipId);
          colorDroppedArea(
            droppedShip.childElementCount,
            cell,
            'player--dropped'
          );
          hideShip(droppedShip);
        }
      });
    }
  };
  makeDroppable();
};
// const changeBackgroundColor = function changeBackgroundColor(
//   color,
//   cell,
//   length
// ) {
//   const cellArr = [];
//   for (let i = 0; i < length; i += 1) {
//     cellArr.push(cell + i);
//   }

//   cellArr.forEach((int) => {
//     if (int >= 0 && int < 100) {
//       playerCellsArray[int].style.backgroundColor = `${color}`;
//     }
//   });
// };

// const stringToNumber = function stringToNumber(num) {
//   return parseInt(num);
// };
