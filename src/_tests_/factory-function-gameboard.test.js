/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { gameboardFactoryFunction } from '../logic/factory-function-gameboard';
// import { shipFactoryFunction } from '../logic/factory-function-ship';

const testBoard = gameboardFactoryFunction();
// const testTwoBoard = gameboardFactoryFunction(shipFactoryFunction(2));
const pBoat = gameboardFactoryFunction();
test('A test for placing the carrier ship at the correct "coordinates"', () => {
  expect(
    gameboardFactoryFunction().placeShip(testBoard.carrier, 0, 1, 2, 3, 4)
  ).toEqual([
    1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  ]);
});

test('A test for placing the patrolBoat at the correct "coordinates"', () => {
  expect(pBoat.placeShip(testBoard.patrolBoat, 3, 4)).toEqual([
    2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  ]);
  pBoat.receiveAttack();
  console.log(pBoat.gameboardArray);
});
