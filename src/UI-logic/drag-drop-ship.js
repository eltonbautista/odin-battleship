/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
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
  const shipNames = [
    'carrier',
    'battleship',
    'destroyer',
    'submarine',
    'patrolBoat',
  ];
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
        // console.log(e.dataTransfer.items);
      });
    }
  };
  makeDraggable();

  const changeOrientation = function changeOrientation(
    ship,
    orientationName,
    orientationDirection
  ) {
    const shipName = ship;

    shipName.dataset.orientation = `${orientationName}`;
    shipName.style.gridAutoFlow = `${orientationDirection}`;
  };

  // Add class "flippable" to each ship
  // Add a double-click event listener, when they double click then change the grid-auto-flow.
  // Flipping it to vertical (row) will change data-orientation to "vertical";
  // Then at the bottom (when colorDroppedArea is called), if the ship still has data-orientation "vertical" then increment by 10 (so it's vertically placed)
  // We can actually call placeShip in colorDroppedArea since once the place is shipped it can't change. No need to put it in start game button function
  // Will need to add parameters so that it doesn't exceed outside of bounds (I think the one in computerPlaceShip will work here).
  // Need one event listener, one will change it to vertical then it will remove itself and add the other eventlistener..?

  const makeFlippable = function makeFlippable() {
    for (const ship of draggableShips) {
      ship.classList.add('flippable');
      if (ship.classList.contains('flippable'));
      {
        ship.addEventListener('dblclick', (e) => {
          if (ship.dataset.orientation === 'horizontal') {
            changeOrientation(ship, 'vertical', 'row');
          } else if (ship.dataset.orientation === 'vertical') {
            changeOrientation(ship, 'horizontal', 'column');
          }
        });
      }
    }
  };
  makeFlippable();

  const hideShip = function hideShip(droppedShip) {
    const droppedShipIndex = draggableShips.indexOf(droppedShip);
    const shipDroppedOnGrid = droppedShip;
    shipDroppedOnGrid.setAttribute('draggable', 'false');
    shipDroppedOnGrid.style.visibility = 'hidden';
    // draggableShips.splice(droppedShipIndex, 1);
    draggableShips[droppedShipIndex] = null;
    // console.log(draggableShips);
  };

  const addShipClass = function addShipClass(grid, shipName, ...coords) {
    for (let i = 0; i < coords.length; i += 1) {
      grid[coords[i]].classList.add(`${shipName}`);
    }
  };

  const colorDroppedArea = function colorDroppedArea(
    length,
    startCell,
    addClass,
    // eslint-disable-next-line no-unused-vars
    index,
    incrementor,
    shipName,
    droppedShip
  ) {
    const coordinateArr = [];
    let increment = 0;
    for (let i = 0; i < length; i += 1) {
      myPlayerCells[myPlayerCells.indexOf(startCell) + increment].classList.add(
        `${addClass}`
      );
      coordinateArr.push(myPlayerCells.indexOf(startCell) + increment);
      increment += incrementor;
    }
    // carrier, battleship, destroyer, submarine, patrolBoat
    // placeShip(playerGrid, myShips[index], ...coordinateArr);
    addShipClass(playerGrid, shipName, ...coordinateArr);
    droppedShip.classList.remove('flippable');
    hideShip(droppedShip);
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
        console.log(droppedShip.id)
        const shipBeingDragged = draggableShips[draggableShips.indexOf(droppedShip)];
        const shipHeadIndex = myPlayerCells.indexOf(cell);
        const gridRowLength = 10;
        cell.classList.remove('player--over');

        // if ((shipHeadIndex % gridRowLength) + shipBeingDragged.childElementCount > gridRowLength && (shipHeadIndex % 100) + (shipBeingDragged.childElementCount-1) * 10 >= 100) {
        //   return;
        // }

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
          console.log(droppedShip);

          if (droppedShip.dataset.orientation === 'horizontal' && (shipHeadIndex % gridRowLength) + shipBeingDragged.childElementCount <= gridRowLength) {
            colorDroppedArea(
              droppedShip.childElementCount,
              cell,
              'player--dropped',
              draggableShips.indexOf(droppedShip),
              1,
              droppedShip.id,
              droppedShip
            );
          } else if (droppedShip.dataset.orientation === 'vertical' && (shipHeadIndex % 100) + (shipBeingDragged.childElementCount - 1) * 10 <= 100) {
            colorDroppedArea(
              droppedShip.childElementCount,
              cell,
              'player--dropped',
              draggableShips.indexOf(droppedShip),
              10,
              droppedShip.id,
              droppedShip
            );
          }
          console.log(playerGrid);
        }
      });
    }
  };
  makeDroppable();
};
