/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable max-len */
// /* eslint-disable comma-dangle */
// /* eslint-disable no-undef */
// /* eslint-disable no-console */
import { Gameboard } from '../function-logic/factory-function-gameboard';

const testBoard = Gameboard();
// Tests for checking if the ships are placed at the correct coordinates.
const x = testBoard.patrolBoat.hitShip;
const y = testBoard.destroyer.hitShip;
testBoard.gameboardArray = [2, 2, 2, 2, 2];
let foo = [0, 1];

test('Testing the renderGrid() method on Gameboard object', () => {
  expect(testBoard.gameboardArray).toEqual([2, 2, 2, 2, 2]);
});

// prettier-ignore
test('A test for placing the patrolBoat at the correct "coordinates"', () => {
  expect(testBoard.placeShip(testBoard.gameboardArray, testBoard.patrolBoat, ...foo)).toEqual([x, x, 2, 2, 2]);
});
// prettier-ignore

// test('Testing the receive attack for patrolBoat', () => {
//   expect(testBoard.receiveAttack(testBoard.gameboardArray, 3)).toEqual([2, 2, 2, 0, x]);
// });
// // prettier-ignore
// test('Adding another ship onto the board', () => {
//   expect(testBoard.placeShip(testBoard.gameboardArray, testBoard.destroyer, 0, 1, 2)).toEqual([y, y, y, 0, x]);
// });
// // prettier-ignore
// test('Testing if shipSunk() works', () => {
//   expect(testBoard.receiveAttack(testBoard.gameboardArray, 4)).toEqual([y, y, y, 0, 0]);
// });
// prettier-ignore
// test('no hit ship should be 1 at coordinate', () => {
//   expect(testBoard.receiveAttack(0)).toEqual([
//     1, 2, 2, 0, 0, 2, 2, y, y, y, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
//   ]);
// });
// // prettier-ignore
// test('hitting a 0, should stay as 0', () => {
//   expect(testBoard.receiveAttack(4)).toEqual([
//     1, 2, 2, 0, 0, 2, 2, y, y, y, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
//   ]);
// });
// // prettier-ignore
// test('hitting a 1 again, should stay as 1', () => {
//   expect(testBoard.receiveAttack(0)).toEqual([
//     1, 2, 2, 0, 0, 2, 2, y, y, y, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
//   ]);
// });
