/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shipFactoryFunction } from '../logic/factory-function-ship';

const patrolBoat = shipFactoryFunction(2);
console.log(patrolBoat);

test("Testing the ship's length", () => {
  expect(patrolBoat.shipArray.length).toBe(2);
});

test('Testing the hit method on my ship factory', () => {
  expect(patrolBoat.hitShip(0)).toEqual([0, 1]);
});
