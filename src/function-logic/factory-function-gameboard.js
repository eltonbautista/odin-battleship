/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { Ship } from './factory-function-ship';

export const Gameboard = function GameboardFactoryFunction() {
  const gameboardArray = [];
  // Here we are making the ship objects.
  const [carrier, battleship, destroyer, submarine, patrolBoat] = [
    Ship(5),
    Ship(4),
    Ship(3),
    Ship(3),
    Ship(2),
  ];
  // const fillArray = function fillArray() {
  //   for (let i = 0; i < 100; i += 1) {
  //     gameboardArray.push(2);
  //   }
  // };
  // fillArray();
  // We define each ship object with a proper variable name, conducive of the Battleship game.
  const myShips = [carrier, battleship, destroyer, submarine, patrolBoat];

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

  // This function takes two parameters: 1. a boat to place 2. a rest parameter "coordinates".
  // coordinates is used to place the boat on the gameboard.
  // This actually doesn't put the ship object onto the board. i.e. shipArray is unaffected.
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
  // After a bunch of refactoring we have got a properly working receiveAttack() method.
  // Basically hitShip() methods are placed into the appropriate coordinates.
  // When that coordinate is hit, then hitShip() will trigger, SPECIFIC to the ship that was there.
  // Since it's a SPECIFIC OBJECT'S METHOD it will apply to THAT object. --> this way we don't need to put coordinates into hitAttack().
  // the if statement will allow .hit() to work only if != 0 and != 1. This means that only .hit() will only work in
  // coordinates with a 2 (has not been shot/covered coordinate)

  // I think it would be best if we receiveAttack() is a function exclusively for triggering hit().
  // Then another function can be made for missed shots. But then again having them together makes sense as well.
  // Receive attack can just be for both cases because the whole gameboardArray and gameboard object is receiving the attack.

  const checkIfGameOver = function checkIfGameOver() {
    myShips.forEach((ship) => {
      if (ship.shipArray.reduce((prev, curr) => prev + curr) === 0) {
        myShips.splice(myShips.indexOf(ship), 1);
      }
    });
    if (myShips.length === 0) {
      console.log('Game Over!');
      return 'Game Over!';
    }
  };

  const receiveAttack = function receiveAttack(gridArray, gameboardCoordinate) {
    // prettier-ignore
    if (
      gridArray[gameboardCoordinate] !== 0
      && typeof gridArray[gameboardCoordinate] === 'function'
    ) {
      gridArray[gameboardCoordinate]();
      gridArray[gameboardCoordinate] = 0; // shots sent at coordinates that have a ship will turn into a 0.
      checkIfGameOver();
      return gridArray;
    }
    // prettier-ignore
    if (
      gridArray[gameboardCoordinate] !== 1 // can't reshoot coordinates that have been shot
      && typeof gridArray[gameboardCoordinate] !== 'function'
    ) {
      gridArray[gameboardCoordinate] = 1; // shots sent at coordinates that have no ships (i.e. just water) will turn into a 1.
      return gridArray;
    }

    return gridArray;
  };

  return {
    gameboardArray,
    placeShip,
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
    receiveAttack,
    renderGrid,
  };
};
