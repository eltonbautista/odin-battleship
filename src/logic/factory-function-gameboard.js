/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { shipFactoryFunction } from './factory-function-ship';

export const gameboardFactoryFunction = function gameboardFactoryFunction() {
  const gameboardArray = [];
  // Here we are making the ship objects.
  const myShips = [
    shipFactoryFunction(5),
    shipFactoryFunction(4),
    shipFactoryFunction(3),
    shipFactoryFunction(3),
    shipFactoryFunction(2),
  ];
  const fillArray = function fillArray() {
    for (let i = 0; i < 100; i += 1) {
      gameboardArray.push(2);
    }
  };
  fillArray();
  // We define each ship object with a proper variable name, conducive of the Battleship game.
  const [carrier, battleship, destroyer, submarine, patrolBoat] = myShips;

  // This function takes two parameters: 1. a boat to place 2. a rest parameter "coordinates".
  // coordinates is used to place the boat on the gameboard.
  // This actually doesn't put the ship object onto the board. i.e. shipArray is unaffected.
  const placeShip = function placeShip(ship, ...coordinates) {
    for (let i = 0; i < ship.shipArray.length; i += 1) {
      if (gameboardArray[coordinates[i]] === 2) {
        gameboardArray[coordinates[i]] = ship.shipArray[i];
      } else {
        return;
      }
    }

    // eslint-disable-next-line consistent-return
    return gameboardArray;
  };
  // After a bunch of refactoring we have got a properly working receiveAttack() method.
  // Basically hitShip() methods are placed into the appropriate coordinates.
  // When that coordinate is hit, then hitShip() will trigger, SPECIFIC to the ship that was there.
  // Since it's a SPECIFIC OBJECT'S METHOD it will apply to THAT object. --> this way we don't need to put coordinates into hitAttack().

  const receiveAttack = function receiveAttack(gameboardCoordinate) {
    gameboardArray[gameboardCoordinate]();
    gameboardArray[gameboardCoordinate] = 0;
    return gameboardArray;
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
  };
};

// const foo = gameboardFactoryFunction();
// foo.placeShip(foo.patrolBoat, 1, 2);
// foo.placeShip(foo.destroyer, 6, 7, 8);
// foo.gameboardArray[1]();
// console.log(foo.gameboardArray);
// console.log(foo.patrolBoat.hitShip());
// console.log(foo.patrolBoat);
