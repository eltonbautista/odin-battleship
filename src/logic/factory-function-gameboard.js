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
  const placeShip = function placeShip(boat, ...coordinates) {
    for (let i = 0; i < boat.shipArray.length; i += 1) {
      gameboardArray[coordinates[i]] = boat.shipArray[i];
    }
    console.log(gameboardArray);
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
  };
};
