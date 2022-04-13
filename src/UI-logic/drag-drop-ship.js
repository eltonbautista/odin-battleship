/* eslint-disable wrap-iife */
/* eslint-disable radix */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
// import { startMenu } from './start-menu';

// import { Gameboard } from "../function-logic/factory-function-gameboard";

export const dragDropShip = function dragDropShip(
  startMenu,
  placeShip,
  playerGrid,
  myShips
) {
  const draggableShips = startMenu();
  const dropGrid = document.querySelector('#player');
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
    // draggableShips.splice(droppedShipIndex, 1);
    // console.log(draggableShips);
  };

  const colorDroppedArea = function colorDroppedArea(
    length,
    startCell,
    addClass,
    // eslint-disable-next-line no-unused-vars
    index
  ) {
    const coordinateArr = [];
    for (let i = 0; i < length; i += 1) {
      myPlayerCells[myPlayerCells.indexOf(startCell) + i].classList.add(
        `${addClass}`
      );
      coordinateArr.push(myPlayerCells.indexOf(startCell) + i);
    }
    // carrier, battleship, destroyer, submarine, patrolBoat
    placeShip(playerGrid, myShips[index], ...coordinateArr);
    console.log(coordinateArr);
  };

  const makeDroppable = function makeDroppable() {
    for (const cell of myPlayerCells) {
      cell.addEventListener('dragover', (e) => {
        e.preventDefault();
        cell.classList.add('player--over');
      });

      // eslint-disable-next-line no-unused-vars
      cell.addEventListener('dragleave', (e) => {
        cell.classList.remove('player--over');
      });
      // prettier-ignore
      cell.addEventListener('drop', (e) => {
        const shipId = e.dataTransfer.getData('text/plain');
        const droppedShip = document.getElementById(shipId);
        const shipBeingDragged = draggableShips[draggableShips.indexOf(droppedShip)];

        cell.classList.remove('player--over');

        if (myPlayerCells.indexOf(cell) !== 99
        && !cell.classList.contains('player--dropped')
          && !myPlayerCells[
            myPlayerCells.indexOf(cell)
              + shipBeingDragged
                .childElementCount
              - 1
          ].classList.contains('player--dropped')
        ) {
          e.preventDefault();
          console.log(myPlayerCells.indexOf(cell));
          if (myPlayerCells.indexOf(cell) < 99) {
            colorDroppedArea(
              droppedShip.childElementCount,
              cell,
              'player--dropped',
              draggableShips.indexOf(droppedShip)
            );
            hideShip(droppedShip);
          }
        }
      });
    }
  };
  makeDroppable();
};
