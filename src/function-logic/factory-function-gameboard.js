/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { Ship } from './factory-function-ship';
import { dragDropShip } from '../UI-logic/drag-drop-ship';
import { startMenu } from '../UI-logic/start-menu';
import { gameOver } from '../UI-logic/gameover';

export const Gameboard = function GameboardFactoryFunction(player, reset) {
  const gameboardArray = [];
  // Here we are making the ship objects.
  // Since we have predetermined ships, I decided to instantiate them here.
  const [carrier, battleship, destroyer, submarine, patrolBoat] = [
    Ship(5),
    Ship(4),
    Ship(3),
    Ship(3),
    Ship(2),
  ];

  const myShips = [carrier, battleship, destroyer, submarine, patrolBoat];

  // Used to render the player grids.
  const renderGrid = function renderGrid(gridSize, gridIdentifier) {
    const mainContent = document.querySelector('#main-content');
    const gridContainer = document.createElement('div');
    // const gridCells = [];
    const populateGridContainer = function populateGridContainer() {
      for (let i = 0; i < gridSize; i += 1) {
        gameboardArray.push(document.createElement('div'));
        gameboardArray[i].setAttribute('class', `${gridIdentifier} cell`);
        gameboardArray[i].setAttribute(`data-${gridIdentifier}`, `${i}`);
        gridContainer.append(gameboardArray[i]);
      }
    };
    gridContainer.setAttribute('id', `${gridIdentifier}`);
    populateGridContainer();
    mainContent.append(gridContainer);
    return gridContainer;
  };

  // A method that places ships onto the corresponding gameboard
  const placeShip = function placeShip(gridArray, ship, ...coordinates) {
    for (let i = 0; i < ship.shipArray.length; i += 1) {
      if (
        // prettier-ignore
        gridArray[coordinates[i]] === 2
        || typeof gridArray[coordinates[i] !== 'function']
      ) {
        gridArray[coordinates[i]] = ship.shipArray[i];
      } else {
        return;
      }
    }
    // eslint-disable-next-line consistent-return
    return gridArray;
  };

  //
  const checkIfGameOver = function _checkIfGameOver() {
    myShips.forEach((ship) => {
      if (ship.shipArray.reduce((prev, curr) => prev + curr) === 0) {
        myShips.splice(myShips.indexOf(ship), 1);
      }
    });
    if (myShips.length === 0) {
      console.log(`Game Over! ${player} has lost!`);
      gameOver(player, reset);
    }
  };

  const highlightCell = function _highlightCell(cell, className) {
    cell.classList.add(`${className}`);
  };

  // When a coordinate with the hitShip function is hit, it will invoke it in this function.
  const receiveAttack = function receiveAttack(
    gridArray,
    gameboardCoordinate,
    // eslint-disable-next-line comma-dangle
    uIGrid
  ) {
    // prettier-ignore
    if (
      gridArray[gameboardCoordinate] !== 0 &&
      typeof gridArray[gameboardCoordinate] === 'function'
    ) {
      highlightCell(uIGrid[gameboardCoordinate], 'cell--hit');
      uIGrid[gameboardCoordinate].classList.remove('player--dropped');
      gridArray[gameboardCoordinate]();
      gridArray[gameboardCoordinate] = 0; // shots sent at coordinates that have a ship will turn into a 0.

      checkIfGameOver(reset);
      return gridArray;
    }
    // prettier-ignore
    if (
      gridArray[gameboardCoordinate] !== 1 // can't reshoot coordinates that have been shot
      && typeof gridArray[gameboardCoordinate] !== 'function'
    ) {
      highlightCell(uIGrid[gameboardCoordinate], 'cell--miss');
      return gridArray;
    }
    return gridArray;
  };

  const playerPlaceShip = dragDropShip;
  const beginGame = startMenu;

  return {
    gameboardArray,
    placeShip,
    receiveAttack,
    renderGrid,
    myShips,
    playerPlaceShip,
    beginGame,
  };
};
